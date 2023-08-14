import { port } from "./config";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";
import * as swaggerUiExpress from "swagger-ui-express";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./data-source";
import AppError from "./utils/App.Error";
import PeopleRoute from "./routes/people.routes";
import { apiDocumentation } from "./swagger/swaggerConfig";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // Accepts the credentials
    app.use(cors({ credentials: true, origin: "*" }));

    // To display incoming and outgoing req/res on terminal
    app.use(morgan("dev"));

    // Swagger Setup
    app.use(
      "/doc",
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(apiDocumentation)
    );

    // Testing route
    app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json({
        message: "This is for testing",
      });
    });
    app.use("/people", PeopleRoute);

    // unhandled Routes
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // Global error handler
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;
        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
          statusCode: error.statusCode,
        });
      }
    );

    // start express server
    app.listen(port, () => console.log(`Server is running on port : ${port}`));
  })
  .catch((error) => console.log(error));

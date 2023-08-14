import AppError from "../utils/App.Error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { People } from "../entity/People";

// Table Connection
const PeopleRepo = AppDataSource.getRepository(People);

export const postHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.file, "This is image");
  try {
    if (req.file) {
      req.body.image = req.file.filename;
    }
    await PeopleRepo.save(req.body)
      .then((result: object) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((error) => {
        next(new AppError(error.statusCode, error.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const getAllHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await PeopleRepo.find()
      .then((result: any) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((error) => {
        next(new AppError(error.statusCode, error.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const getSingleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await PeopleRepo.findOneBy({ id: req.params.id })
      .then((result: any) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((error) => {
        next(new AppError(error.statusCode, error.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const deleteHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const people = await PeopleRepo.findOneBy({ id: req.params.id });
    if (!people) {
      next(new AppError(404, "ID is invalid"));
    } else {
      await PeopleRepo.delete({ id: req.params.id })
        .then((result: any) => {
          res.status(200).json({
            status: "success",
            data: result,
          });
        })
        .catch((error) => {
          next(new AppError(error.statusCode, error.message));
        });
    }
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const patchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const people = await PeopleRepo.findOneBy({ id: req.params.id });
    if (!people) {
      next(new AppError(404, "ID is invalid"));
    }
    Object.assign(people, req.body);
    await PeopleRepo.save(people)
      .then((result: any) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((error) => {
        next(new AppError(error.statusCode, error.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

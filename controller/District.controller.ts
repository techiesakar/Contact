import AppError from "../utils/App.Error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { District } from "../entity/District";

const DistrictRepo = AppDataSource.getRepository(District);

export const postHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await DistrictRepo.save(req.body)
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
    await DistrictRepo.find()
      .then((result: any) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((error) => {
        next(new AppError(error.statuscode, error.message));
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
    await DistrictRepo.findOneBy({ id: parseInt(req.params.id) })
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

export const patchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let District = await DistrictRepo.findOneBy({
      id: parseInt(req.params.id),
    });
    if (!District) {
      return next(new AppError(404, "District not found"));
    }
    Object.assign(District, req.body);
    await DistrictRepo.save(District)
      .then((result: object) => {
        res.status(200).json({
          message: "District has been updated",
          result,
        });
      })
      .catch((error: any) => {
        next(new AppError(error.statusCode, error.message));
      });
  } catch (error: any) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const deleteHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await DistrictRepo.delete({ id: parseInt(req.params.id) })
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

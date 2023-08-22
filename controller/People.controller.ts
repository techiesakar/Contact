import AppError from "../utils/App.Error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Candidate } from "../entity/Candidate";

const CandidateRepo = AppDataSource.getRepository(Candidate);

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
    await CandidateRepo.save(req.body)
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
    await CandidateRepo.find()
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
    await CandidateRepo.findOneBy({ id: req.params.id })
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
    const people = await CandidateRepo.findOneBy({ id: req.params.id });
    if (!people) {
      next(new AppError(404, "ID is invalid"));
    } else {
      await CandidateRepo.delete({ id: req.params.id })
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
    const people = await CandidateRepo.findOneBy({ id: req.params.id });
    if (!people) {
      next(new AppError(404, "ID is invalid"));
    }
    Object.assign(people, req.body);
    await CandidateRepo.save(people)
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

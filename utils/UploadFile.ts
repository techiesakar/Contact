import * as multer from "multer";
import { Request, Router } from "express";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, `public`);
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

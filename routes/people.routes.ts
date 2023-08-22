import { Router } from "express";
import {
  deleteHandler,
  getAllHandler,
  getSingleHandler,
  patchHandler,
  postHandler,
} from "../controller/People.controller";
import { upload } from "../utils/UploadFile";
const router = Router();

router.route("/").post(upload.single("image"), postHandler).get(getAllHandler);
router
  .route("/:id")
  .get(getSingleHandler)
  .delete(deleteHandler)
  .patch(patchHandler);
export default router;

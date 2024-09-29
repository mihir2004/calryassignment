import express from "express";
import {
  addRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest,
  markRequestComplete,
} from "../controllers/requestControllers.js";

const router = express.Router();

router.get("/", getAllRequests);
router.post("/", addRequest);
router.get("/:id", getRequestById);
router.put("/:id", updateRequest);
router.delete("/:id", deleteRequest);
router.post("/:id/complete", markRequestComplete);

export default router;

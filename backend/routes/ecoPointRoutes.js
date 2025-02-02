import express from "express";
import {
  createEcoPoint,
  getEcoPointByUserId,
  updateEcoPoint,
  deleteEcoPoint
} from "../controllers/ecoPointController.js";

const router = express.Router();

// Create EcoPoint
router.post("/eco-points", createEcoPoint);

// Get EcoPoint by User ID
router.get("/eco-points/:userId", getEcoPointByUserId);


// Update EcoPoint by User ID (Full Update with PUT)
router.put("/eco-points/:userId", updateEcoPoint);

// Partial Update EcoPoint by User ID (PATCH)
router.patch("/eco-points/:userId", updateEcoPoint); 


// Delete EcoPoint by User ID
router.delete("/eco-points/:userId", deleteEcoPoint);

export default router;

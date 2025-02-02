import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ecoPointRoutes from "./routes/ecoPointRoutes.js"; // Import the routes

dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware setup
app.use(express.json());  // Body parser for JSON
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"], // Allow PATCH method
    credentials: true,
  })
);

// Use the EcoPoint routes
app.use("/api", ecoPointRoutes);

export default app;

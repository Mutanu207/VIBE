import express from "express";
import moodRouter from "./src/mood/mood.route.js";
const app= express();
app.use(express.json());
app.use("/api/mood", moodRouter);
export default app;

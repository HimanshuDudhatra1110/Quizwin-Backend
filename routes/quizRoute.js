import express from "express";
import quizModel from "../models/quizModel.js";
import factModel from "../models/factModel.js";

const router = express.Router();

//create an api to get all quiz and facts data

router.get("/quizzes", async (req, res) => {
  try {
    const quizzesData = await quizModel.find();

    const factsData = await factModel.find();

    res.json({ quizzesData, factsData });
  } catch (error) {
    console.error("Error in getting quizzes data", error);
    res.status(500).json({ message: "Error in getting quizzes data" });
  }
});

export default router;

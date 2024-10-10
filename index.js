import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import quizRoute from "./routes/quizRoute.js";

//configure env
dotenv.config();

// connect to db
const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.log("Error in MongoDB connection: ", error);
  }
};

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// create base api to check if server is running
app.get("/", (req, res) => {
  res.send("Server and API are running");
});

// create api to get all quiz and facts data
app.use("/api", quizRoute);

let questions = [
  { id: 1, question: "What is 2+2?", options: ["3", "4", "5", "6"], ans: "4" },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    ans: "Paris",
  },
];
console.log(questions);

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.post("/api/submit", (req, res) => {
  const { score, coins } = req.body;
  console.log(`Received score: ${score}, coins: ${coins}`);
  res.status(200).json({ message: "Results received" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

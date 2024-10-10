import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  winamount: { type: Number, required: true },
  entryfees: { type: Number, required: true },
  img: { type: String },
  questions: [
    {
      id: { type: Number, required: true },
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      answer: { type: String, required: true },
    },
  ],
});

export default mongoose.model("Quiz", quizSchema);

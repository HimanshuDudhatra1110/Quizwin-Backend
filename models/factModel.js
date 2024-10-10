import mongoose from "mongoose";

const factSchema = new mongoose.Schema({
  factConetent: { type: String, required: true },
});

export default mongoose.model("Fact", factSchema);

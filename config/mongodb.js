import mongoose from "mongoose";
import getParameter from "./aws-creds.js";

const connectDB = async () => {
  const MONGO_URL =
    (await getParameter("AI_IMAGE_MONGO_URI")) || process.env.MONGO_URI;
  console.log("////", MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(MONGO_URL);
};
export default connectDB;

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
// import { getParameter } from "./config/aws-creds.js";\
import getParameter from "./config/aws-creds.js";
const PORT = (await getParameter("AI_IMAGE_PORT")) || process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => {
  res.send("API working");
});

const runApp = async () => {
  await connectDB();
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`);
  });
};

runApp();

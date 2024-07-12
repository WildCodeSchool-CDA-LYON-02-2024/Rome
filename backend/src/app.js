import express from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // keep this one, after checking the value in `backend/.env`
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT} ....`);
});

app.use(express.static("public"));

export default app;

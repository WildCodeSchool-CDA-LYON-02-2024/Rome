import express from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // keep this one, after checking the value in `backend/.env`
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);
app.use(express.json());
app.use("/", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT} ....`);
});

export default app;

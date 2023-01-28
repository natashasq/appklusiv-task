import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRpoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import cookieParser from "cookie-parser";
import { Request, Response, NextFunction } from "express";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(`${process.env.MONGO_DB_URL}`);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to appklusive app." });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
userRpoutes(app);
authRoutes(app);

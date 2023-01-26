import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRpoutes from "./routes/user.route"


dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://natasha:test1234@appklusive-task.knczrdt.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.once("open", () => {
  console.log("connected to database")
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to appklusive app." });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

  userRpoutes(app)
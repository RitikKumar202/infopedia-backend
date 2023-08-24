import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import path from "path";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middlewares/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//Static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

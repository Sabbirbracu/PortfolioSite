const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const heroRoutes = require("./routes/hero");
dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/hero", heroRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

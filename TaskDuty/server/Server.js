const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskMiddleware = require("./Middlewares/TaskMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use(TaskMiddleware);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/tasks", require("./Routes/Taskroutes"));
app.use("/api/users", require("./Routes/userRoutes"));

// Health check route (no auth needed — middleware runs but it's fine to hit this)
app.get("/", (req, res) => res.json({ message: "TaskDuty API is running" }));


const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(
        `Taskduty server running on http://localhost:${process.env.PORT}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

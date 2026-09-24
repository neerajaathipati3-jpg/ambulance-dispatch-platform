const express = require("express");
const cors = require("cors");

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const emergencyRoutes =
    require("./routes/emergencyRoutes");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/emergency", emergencyRoutes);
app.get("/", (req, res) => {
    res.send("🚑 Ambulance Dispatch Backend is Running!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
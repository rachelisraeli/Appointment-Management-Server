require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/business", require("./routes/businessRoute"));
app.use("/api/services", require("./routes/servicesRoute"));
app.use("/api/meetings", require("./routes/meetingsRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

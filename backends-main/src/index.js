require("dotenv").config(); // Sabse upar rakhein
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./routes/route');

const app = express();

// Debugging: Ye check karne ke liye ki URL load ho raha hai ya nahi
console.log("Database URL from ENV:", process.env.MONGO_URI || process.env.MongoDBURL);

app.use('/uploads', express.static('uploads'));
app.use(express.json());

// CORS Setup
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

// Database Connection
const dbPath = process.env.MONGO_URI || process.env.MongoDBURL;

if (!dbPath) {
    console.error(" Error: MONGO_URI is not defined in .env file!");
} else {
    mongoose.connect(dbPath)
        .then(() => { console.log(" MongoDB is connected") })
        .catch((error) => { console.log(" Connection Error:", error.message) });
}

app.use('/api', router);

app.listen(8080, () => { 
    console.log("🚀 Server is running on port 8080"); 
});
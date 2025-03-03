import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

export default async function connect() {
    mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
    })
        .then(() => console.log("✅ MongoDB Connected"))
        .catch(err => console.error("❌ MongoDB Connection Error:", err));
    console.log(process.env.ATLAS_URI)
    console.log("Database Connected")
}
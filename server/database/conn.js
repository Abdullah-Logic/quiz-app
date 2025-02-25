import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

export default async function connect() {
    mongoose.connect(process.env.ATLAS_URI)
    console.log(process.env.ATLAS_URI)
    console.log("Database Connected")
}
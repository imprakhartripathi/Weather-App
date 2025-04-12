import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBurl = process.env.MONGODB_URI as string;

export const connectToMongoDB = async (): Promise<void> => {
  if (!mongoDBurl) {
    console.error("MongoDB URI is missing! Set MONGODB_URI in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoDBurl, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

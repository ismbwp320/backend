import mongoose from "mongoose";
import { MONGO_URI } from "@config/index";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Error: ${String(error)}`);
        }
        process.exit(1);
    }
    }   
export default connectDB;


import dotenv from 'dotenv';

dotenv.config();
const config = {
  PORT: process.env.PORT || 3000,
}

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
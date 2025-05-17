import express from 'express';
import router from '@routes/index';
import connectDB from '@config/db';
import { PORT } from '@config/index';
const app = express();
connectDB();
app.use(express.json());
app.use('/api/v1/users', router);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
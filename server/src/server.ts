import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './router';
import { connectToMongoDB } from './mongodb.config';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

connectToMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

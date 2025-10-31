import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';
import { isAuthenticated } from './middlewares/authMiddleware.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRouter); // if the URL starts with /api then the request is forwarded to api router.

app.get('/', (req, res) => {
  return res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
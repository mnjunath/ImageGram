import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';
import { isAuthenticated } from './middlewares/authMiddleware.js';
import { rateLimit } from 'express-rate-limit';

const PORT = 3000;

const app = express();

const limiter = rateLimit({
  windowMs: 0.5 * 60 * 1000, // 30 seconds
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);
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
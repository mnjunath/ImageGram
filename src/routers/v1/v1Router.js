import express from 'express';
import postRouter from './post.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/posts', postRouter); // request forwarded to post router
router.use('/users', userRouter); // request forwarded to user router

export default router;
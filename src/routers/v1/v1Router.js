import express from 'express';
import postRouter from './post.js';
import userRouter from './user.js';
import commentRouter from './comment.js';

const router = express.Router();

router.use('/posts', postRouter); // request forwarded to post router
router.use('/users', userRouter); // request forwarded to user router
router.use('/comments', commentRouter); // request forwarded to comment router

export default router;
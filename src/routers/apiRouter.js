// this apirouter will trigger when the url starts with /api
import express from 'express';
import v1Router from './v1/v1Router.js';

const router = express.Router();

router.use('/v1', v1Router); // request forwarded to v1 router

export default router;
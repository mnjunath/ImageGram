// after /users the remaining part of url is handled here
import express from 'express';
import { getProfile, signup, signin } from '../../controllers/userController.js';
import { zodSignupSchema } from '../../validator/zodSignupSchema.js';
import { zodSigninSchema } from '../../validator/zodSigninSchema.js';
import { validate } from '../../validator/zodValidator.js';

const router = express.Router();

router.get('/profile', getProfile);

router.post('/signup',validate(zodSignupSchema) , signup);

router.post('/signin',validate(zodSigninSchema) , signin);

export default router;
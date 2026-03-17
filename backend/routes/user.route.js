import express from 'express';
import authenticate from "../middleware/auth.middleware.js";
import { loginUser, createUser } from '../controllers/user.controller.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const useRouter = express.Router();

useRouter.post('/login', loginLimiter,loginUser);
useRouter.post('/create', loginLimiter, createUser);


export default useRouter;
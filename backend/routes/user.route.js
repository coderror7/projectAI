import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";
import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/register',                // Register route
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.createUserController);       // Register controller


router.post('/login',           // Login route
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.loginController)         // Login controller


router.get('/profile', authMiddleware.authUser,userController.profileController)        // Profile route or controller

router.post("/logout", authMiddleware.authUser, userController.logoutController)     // Logout route or controller



export default router;
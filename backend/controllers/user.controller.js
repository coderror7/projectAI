import userModel from "../models/user.model.js";
import * as userService from "../services/user.services.js";
import { validationResult } from "express-validator";
import TokenBlacklist from "../models/tokenBlacklist.model.js";

export const createUserController = async (req, res) => {
    const errors = validationResult(req);   // Check for validation errors

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});      // If there are errors, return them
    }

    try{
        const user = await userService.createUser(req.body);        // Create user
        
        const token = await user.generateJWT();             // Generate JWT token

        res.status(201).send({user, token});
    } catch (error){ 
        res.status(400).send({message: error.message})          // If there is an error, return it
    }
} 


export const loginController = async (req, res) => {
    const errors = validationResult(req);               // Check for validation errors

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');            // Find user by email

        if (!user) {
            return res.status(401).json({ errors: 'invalid credentials' });
        }


        if (!user.password) {
            return res.status(500).json({ errors: 'User password not found in DB' });       // If password is not found, return error
        }

        const isMatch = await user.validatePassword(password);

        if (!isMatch) {
            return res.status(401).json({ errors: 'invalid credentials' });         // If password is incorrect, return error
        }

        const token = await user.generateJWT();

        res.status(200).send({ user, token });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


export const profileController = async (req, res) => {
    console.log(req.user);   // Log user object
 
    res.status(200).json({
         user: req.user  // Return user object
 });
}

export const logoutController = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        // Add token to the blacklist
        await TokenBlacklist.create({ token });

        // Clear cookie (if applicable)
        res.clearCookie("token");

        res.status(200).json({ message: "Logged out successfully, token blacklisted for 24 hours" });

    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

import userModel from "../models/user.model.js";
import * as userService from "../services/user.services.js";
import { validationResult } from "express-validator";

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

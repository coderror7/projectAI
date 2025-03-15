import userModel from "../models/user.model.js";
import * as userService from "../services/user.services.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserController = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const user = await userService.createUser(req.body);
        
        const token = await user.generateJWT();

        res.status(201).send({user, token});
    } catch (error){
        res.status(400).send({message: error.message})
    }
} 


export const loginController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ errors: 'invalid credentials' });
        }


        if (!user.password) {
            return res.status(500).json({ errors: 'User password not found in DB' });
        }

        const isMatch = await user.validatePassword(password);

        if (!isMatch) {
            return res.status(401).json({ errors: 'invalid credentials' });
        }

        const token = await user.generateJWT();

        res.status(200).send({ user, token });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


export const profileController = async (req, res) => {
    console.log(req.user);

    res.status(200).json({
         user: req.user
 });
}

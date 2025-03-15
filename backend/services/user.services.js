import userModel from "../models/user.model.js";

export const createUser = async ({
    email,password 
}) => {
    if (!email || !password) {
        throw new Error('Email and password are required');  // If email or password is missing, return error
    }

    const hashedPassword = await userModel.hashPassword(password);  // Hash password

    const user = await userModel.create({
        email,
        password: hashedPassword,       // Create user
    })

    return user;
}
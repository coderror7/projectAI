import jwt from "jsonwebtoken";
import TokenBlacklist from "../models/tokenBlacklist.model.js";

export const authUser = async (req, res, next) => {
    try{
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];  // Get token from cookies or headers

        if(!token){
            return res.status(401).send({errors: 'unauthorized user'});
        }

        
        // Check if token is blacklisted
        const isBlacklisted = await TokenBlacklist.findOne({ token });

        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized: Token has been blacklisted" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);              // Verify token
        req.user = decoded;         // Set user in request object
        next();
    }catch(error){
        res.status(401).send({errors: 'unauthorized user'});        // Return 401 if token is invalid
    }
}
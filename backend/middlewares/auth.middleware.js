import jwt from "jsonwebtoken";


export const authUser = async (req, res, next) => {
    try{
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];  // Get token from cookies or headers

        if(!token){
            return res.status(401).send({errors: 'unauthorized user'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);              // Verify token
        req.user = decoded;         // Set user in request object
        next();
    }catch(error){
        res.status(401).send({errors: 'unauthorized user'});        // Return 401 if token is invalid
    }
}
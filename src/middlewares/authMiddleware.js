import { checkIfUserExists } from "../services/userService.js";
import { verifyjwtToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
    // check jwt is passed in headers
    const token = req.headers["x-access-token"];

    if(!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        });
    }

    // verify the token
    try {
        const response = verifyjwtToken(token);

        const doesUserExist = await checkIfUserExists(response.email);

        if (!doesUserExist) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = response;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid Token'
        });
    }

}
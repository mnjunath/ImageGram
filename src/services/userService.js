import { createUser, findUserByEmail } from "../repositories/userRepository.js"
import bcrypt from "bcrypt";
import { generatejwtToken } from "../utils/jwt.js";

export const signupUserService = async (user) => {
    try {
        const newUser = await createUser(user);
        return newUser;
    } catch (error) {
        if(error.name === 'MongoServerError' && error.code === 11000) {
            throw {
                status: 400,
                message: 'User with this email or username already exists'
            }
        }
        throw error;
    }
}

export const signinUserService = async (userDetails) => {
    try {
        // to check if there is valid user registered with this email
        const user = await findUserByEmail(userDetails.email);
        if(!user) {
            throw {
                status: 404,
                message: 'User not found'
            }
        }

        // to check if the password is valid
        const isPasswordValid = bcrypt.compareSync(userDetails.password, user.password);
        if(!isPasswordValid) {
            throw {
                status: 401,
                message: 'Invalid password'
            }
        }

        const token = generatejwtToken({ email: user.email, id: user._id, username: user.username });
        return token;

    } catch (error) {
        throw error;
    }
}

export const checkIfUserExists = async (email) => {
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}
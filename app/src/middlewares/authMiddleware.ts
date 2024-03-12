import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/interfaces";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, age, hobbies}: IUser = req.body;
        if(!username) return res.status(404).json({
            status: 404,
            success: false,
            message: "Username is required."
        });
        if(!age) return res.status(404).json({
            status: 404,
            success: false,
            message: "Age is required."
        });
        if(!hobbies) return res.status(404).json({
            status: 404,
            success: false,
            message: "Please select list of hobbies"
        });
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}
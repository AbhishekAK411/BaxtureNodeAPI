import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/interfaces";
import { validate as uuidValidate, version as uuidVersion } from "uuid";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, age, hobbies}: IUser = req.body;
        if(!username) return res.status(400).json({
            status: 400,
            success: false,
            message: "Username is required."
        });
        if(!age) return res.status(400).json({
            status: 400,
            success: false,
            message: "Age is required."
        });
        if(!hobbies) return res.status(400).json({
            status: 400,
            success: false,
            message: "Please select list of hobbies"
        });

        next();
    } catch (error) {
        return res.status(500).json({
            status: 500, 
            success: false, 
            message: "Internal server error."
        });
    }
}

export const paramMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if(!uuidValidate(id) || !uuidVersion(id)){
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Invalid."
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        });
    }
}
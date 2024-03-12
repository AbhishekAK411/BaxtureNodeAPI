import { Request, Response } from "express";
import { IUser } from "../interfaces/interfaces";
import User from "../models/user.model";
import { v4 as uuidv4, validate as uuidValidate, version as uuidVersion } from "uuid";

export const getUsers = async(req: Request,res: Response) => {
    try {
        const allUsers = await User.find().exec();
        return res.status(200).json({
            status: 200,
            success: true,
            users: allUsers
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        });
    }
}

export const getUser = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const singleUser = await User.findOne({userId: id}).exec();
        if(!singleUser) return res.status(404).json({
            status: 404,
            success: false,
            message: "User not found."
        });

        return res.status(200).json({
            status: 200,
            success: true,
            user: singleUser
        });
        

    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        });
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        const { username, age, hobbies }: IUser = req.body;
        const findExistingUser = await User.findOne({username}).exec();
        if(findExistingUser) return res.status(403).json({
            status: 403,
            success: false,
            message: "You are already signed up."
        });
        const userId = uuidv4();
        const newUser = new User({
            userId,
            username,
            age,
            hobbies
        });
        await newUser.save();
        return res.status(201).json({
            status: 201,
            success: true,
            message: "User created successfully."
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        });
    }
}

export const updateUser = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { username, age, hobbies }: IUser = req.body;

        const updateUser = await User.findOneAndUpdate({userId: id}, {
            username,
            age,
            hobbies
        }).exec();
        if(!updateUser) return res.status(404).json({
            status: 404,
            success: false,
            message: "Could not find user."
        });

        return res.status(200).json({
            status: 200,
            success: true,
            message: "User updated successfully."
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        })
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const deleteUser = await User.findOneAndDelete({userId: id}).exec();
        if(deleteUser){
            return res.status(204).json({
                status: 204,
                success: true,
                message: "User deleted successfully."
            });
        }else{
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Could not find user."
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error."
        })
    }
}
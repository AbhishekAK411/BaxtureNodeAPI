import { IUser } from "../interfaces/interfaces";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    }
});

export default mongoose.model<IUser>("User", userSchema);
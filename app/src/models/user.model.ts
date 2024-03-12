import { IUser } from "../interfaces/interfaces";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    hobbbies: {
        type: [String],
        required: true
    }
});

export default mongoose.model<IUser>("User", userSchema);
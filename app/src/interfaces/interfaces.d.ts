import { Document } from "mongoose";
import { Types } from "mongoose";

export interface IUser extends Document {
    id: Types.ObjectId;
    username: string;
    age: number;
    hobbies: string[]
}
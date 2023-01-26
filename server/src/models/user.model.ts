import { Schema, model } from 'mongoose';

export interface IUser {
    id: string
    first_name: string;
    last_name: string;
    email: string;
    password: string
  }

const userSchema = new Schema<IUser>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

export const User = model<IUser>('User', userSchema);
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    verified: { type: Boolean },
    username: { type: String, unique: true, required: true }
}, { timestamps: true })
export const User = models?.User || model('User', UserSchema);
import { connectMongoDB } from "../../../lib/mongodb"
import bcrypt from "bcrypt";
import { User } from './../../../models/User';

export default async function handler(req, res) {
    try {
        const { username, email, password } = await req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB()

        // Save user data to the database
        await User.create({ username, email, password: hashedPassword });

        // Respond with success message
        res.status(201).json({ message: "User registered." });
    } catch (error) {
        console.log(error);
        // Respond with error message
        res.status(500).json({ message: "An error occurred while registering the user." });
    }
}

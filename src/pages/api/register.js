import { connectMongoDB } from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import { User } from './../../../models/User';

export default async function handler(req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Connect to MongoDB
        await connectMongoDB();

        // Save user data to the database
        await User.create({ username, email, password: hashedPassword });

        // Respond with success message
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error registering user:", error);

        // Check for specific errors
        if (error.code === 11000) { // Duplicate key error
            return res.status(400).json({ message: "User with this email already exists." });
        }

        // Respond with generic error message
        res.status(500).json({ message: "An error occurred while registering the user." });
    }
}

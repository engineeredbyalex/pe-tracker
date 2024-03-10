import { mongooseConnect } from '../../../lib/mongoose';
import { User } from './../../../models/User';


export default async function handler(req, res) {
    try {
        await mongooseConnect();
        const { email } = req.body;

        console.log("Email received:", email);

        // Check if the user exists in the database
        const user = await User.findOne({ email }).select("_id");

        console.log("User found:", user);

        // Respond with user information
        res.status(200).json({ user });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

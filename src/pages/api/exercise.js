// importing mongooseConnect
import { mongooseConnect } from "../../../lib/mongoose";
// importing exercise
import { Exercise } from "../../../models/Exercise";

export default async function handle(req, res) {
    try {
        console.log('Received request:', req.body);
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    const { method } = req;

    try {
        await mongooseConnect();

        if (method === "GET") {
            if (req.query?.id) {
                const data = await Exercise.findOne({ _id: req.query.id, userEmail: req.headers['user-email'] });
                if (!data) {
                    return res.status(404).json({ error: 'Exercise not found' });
                }
                res.json(data);
            } else {
                const data = await Exercise.find({ userEmail: req.headers['user-email'] });
                res.json(data);
            }
        }

        if (method === "POST") {
            const { userEmail, type, duration, durationUnit, sets, unit,device } = req.body;

            if (userEmail !== req.headers['user-email']) {
                return res.status(403).json({ error: 'Forbidden' });
            }

            const exerciseDataDoc = await Exercise.create({
                userEmail, type, duration, durationUnit, sets, unit, device
            });
            res.json(exerciseDataDoc);
        }

        if (method === "PUT") {
            const { id } = req.query;
            const { userEmail, type, duration, durationUnit, sets, unit, device } = req.body;

            if (userEmail !== req.headers['user-email']) {
                return res.status(403).json({ error: 'Forbidden' });
            }

            const updatedExercise = await Exercise.findOneAndUpdate(
                { _id: id },
                { userEmail, type, duration, durationUnit, sets, unit, device },
                { new: true }
            );
            res.json(updatedExercise);
        }

        if (method === "DELETE") {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ error: 'Missing ID parameter' });
            }

            await Exercise.deleteOne({ _id: id });
            res.json({ success: true });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

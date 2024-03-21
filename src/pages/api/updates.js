// Importing necessary libraries and models
import { mongooseConnect } from "../../../lib/mongoose";
import { UpdateModel } from "../../../models/UpdateData";

// Handling HTTP requests
export default async function handle(req, res) {
    try {
        console.log('Received request:', req.body);
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    const { method, user } = req;

    try {
        await mongooseConnect();

        if (method === "GET") {
            if (req.query?.id) {
                const data = await UpdateModel.findOne({ _id: req.query.id, userEmail: req.headers['user-email'] });
                res.json(data);
            } else {
                const data = await UpdateModel.find({ userEmail: req.headers['user-email'] });
                res.json(data);
            }
        } else if (method === "POST") {
            const {
                updatePriority,
                updateName,
                updateDescription,
                updateCreator,
                updateVotes,
                updateStatus
            } = req.body;

            const updateDataDoc = await UpdateModel.create({
                updatePriority,
                updateName,
                updateDescription,
                updateCreator,
                updateVotes,
                updateStatus
            });
            res.json(updateDataDoc);
        } else if (method === "PUT") {
            const {
                updatePriority,
                updateName,
                updateDescription,
                updateCreator,
                updateVotes,
                updateStatus
            } = req.body;

            const { id } = req.query;

            await UpdateModel.updateOne({ _id: id },
                {
                    updatePriority,
                    updateName,
                    updateDescription,
                    updateCreator,
                    updateVotes,
                    updateStatus
                }
            );
            res.json(true);

        } else if (method === "DELETE") {
            const { id } = req.query;

            if (id) {
                await UpdateModel.deleteOne({ _id: id });
                res.json(true);
            }
        }
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

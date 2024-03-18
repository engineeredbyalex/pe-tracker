import { TrackingData } from "../../../models/Tracking";
import { mongooseConnect } from "../../../lib/mongoose";

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
                const data = await TrackingData.findOne({ _id: req.query.id, userEmail: req.headers['user-email'] }); // Retrieve user email from request headers
                res.json(data);
            } else {
                // Fetch tracking data based on the user's email
                const data = await TrackingData.find({ userEmail: req.headers['user-email'] });
                res.json(data);
            }
        }
        if (method === "POST") {
            const {
                userEmail,
                flacidLenght,
                flacidGirth,
                flacidBPLenght,
                erectLenght,
                erectGirth,
                erectBPLenght,
                postExtendedFlacidLenght,
                postExtendederectBPLenght,
                postExtendedErectLenght,
                postPumpingErectLenght,
                postPumpingErectGirth,
                postPumpingFlacidLenght,
                postPumpingFlacidGirth
            } = req.body;

            const trackingDataDoc = await TrackingData.create({
                userEmail,
                flacidLenght,
                flacidGirth,
                flacidBPLenght,
                erectLenght,
                erectGirth,
                erectBPLenght,
                postExtendedFlacidLenght,
                postExtendederectBPLenght,
                postExtendedErectLenght,
                postPumpingErectLenght,
                postPumpingErectGirth,
                postPumpingFlacidLenght,
                postPumpingFlacidGirth,
            });

            res.json(trackingDataDoc);
        }

        if (method === "PUT") {
            const {
                userEmail,
                flacidLenght,
                flacidGirth,
                flacidBPLenght,
                erectLenght,
                erectGirth,
                erectBPLenght,
                postExtendedFlacidLenght,
                postExtendederectBPLenght,
                postExtendedErectLenght,
                postPumpingErectLenght,
                postPumpingErectGirth,
                postPumpingFlacidLenght,
                postPumpingFlacidGirth
            } = req.body;

            const { id } = req.query;

            await TrackingData.updateOne(
                { _id: id },
                {
                    userEmail,
                    flacidLenght,
                    flacidGirth,
                    flacidBPLenght,
                    erectLenght,
                    erectGirth,
                    erectBPLenght,
                    postExtendedFlacidLenght,
                    postExtendederectBPLenght,
                    postExtendedErectLenght,
                    postPumpingErectLenght,
                    postPumpingErectGirth,
                    postPumpingFlacidLenght,
                    postPumpingFlacidGirth
                }
            );

            res.json(true);
        }

        if (method === "DELETE") {
            const { id } = req.query;

            if (id) {
                await TrackingData.deleteOne({ _id: id });
                res.json(true);
            }
        }

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

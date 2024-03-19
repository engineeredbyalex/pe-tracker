// importing mongooseConnect
import { mongooseConnect } from "../../../lib/mongoose";
// importing the model
import { Equipment } from "../../../models/Equipment";


export default async function handle(req,res) {
    try{
        console.log('Received request:', req.body);
    }
    catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    const { method } = req;

    try{
        await mongooseConnect()
        if (method === "GET") {
            if (req.query?.id) {
                const data = await Equipment.findOne({ _id: req.query.id, userEmail: req.headers['user-email'] }); // Retrieve user email from request headers
                res.json(data);
            } else {
                // Fetch tracking data based on the user's email
                const data = await Equipment.find({ userEmail: req.headers['user-email'] });
                res.json(data);
            }
        }
        if (method === "POST") {
            const{userEmail,type,brand,name} = req.body

            if (userEmail !== req.headers['user-email']) {
                return res.status(403).json({ error: 'Forbidden' });
            }

            const equipmentDoc = await Equipment.create({
                userEmail,type,brand,name
            })
            res.json(equipmentDoc);
        }
        if (method === "PUT") {
            const { userEmail, type, brand, name } = req.body

            if (userEmail !== req.headers['user-email']) {
                return res.status(403).json({ error: 'Forbidden' });
            }
            const { id } = req.query;

            await Equipment.updateOne(
                {_id:id},
                {userEmail,brand,type,name}
            )
            res.json(true);
        }
          if (method === "DELETE") {
            const { id } = req.query;

            if (id) {
                await Equipment.deleteOne({ _id: id });
                res.json(true);
            }
        }
    }
    catch(error){
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
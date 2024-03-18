// importing mongoose schema Schema and model
import { model, models, Schema } from "mongoose";

const TrackingSchema = new Schema(
    {
        userEmail: { type: String, required: true }, 
        flacidLenght: { type: Number, required: true }, 
        flacidGirth: { type: Number, required: true },
        flacidBPLenght: { type: Number },
        erectLenght: { type: Number },
        erectGirth: { type: Number },
        erectBPLenght: { type: Number },
        postExtendedFlacidLenght: { type: Number },
        postExtendederectBPLenght: { type: Number },
        postExtendedErectLenght: { type: Number },
        postPumpingErectLenght: { type: Number },
        postPumpingErectGirth: { type: Number },
        postPumpingFlacidLenght: { type: Number },
        postPumpingFlacidGirth: { type: Number },
    },
    { timestamps: true }
);

export const TrackingData = models?.TrackingData || model('TrackingData', TrackingSchema);

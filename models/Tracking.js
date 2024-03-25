// importing mongoose schema Schema and model
import { model, models, Schema } from "mongoose";

const TrackingSchema = new Schema(
    {
        userEmail: { type: String, required: true }, 
        flacidLenght: { type: String, }, 
        flacidGirth: { type: String, },
        flacidBPLenght: { type: String },
        erectLenght: { type: String },
        erectGirth: { type: String },
        erectBPLenght: { type: String },
        postExtendedFlacidLenght: { type: String },
        postExtendederectBPLenght: { type: String },
        postExtendedErectLenght: { type: String },
        postPumpingErectLenght: { type: String },
        postPumpingErectGirth: { type: String },
        postPumpingFlacidLenght: { type: String },
        postPumpingFlacidGirth: { type: String },
        stretchedBPFlacid: { type: String },
        erectionQuality: { type: String },
        bodyFat: { type: String },
        date:{type:String},
    },
    {
        timestamps: true
    }
);

export const TrackingData = models?.TrackingData || model('TrackingData', TrackingSchema);

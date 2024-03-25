import { model, models, Schema } from "mongoose"

const FitnessSchema = new Schema({
    userEmail: { type: String, required: true },
    exerciseName: { type: String },
    exerciseCategory: { type: String },
    duration: { type: String },
    intensityLevel: { type: Number },
    numberOfSets: { type: Number },
    numberOfReps:{type:String},
},
{timestamps:true})
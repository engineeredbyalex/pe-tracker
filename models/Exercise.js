// importing model, models, Schema
import { model, models, Schema } from "mongoose";

const ExerciseSchema = new Schema({
    userEmail:{type:String},
    type: { type: String, required: true }, // Type of exercise (e.g., stretching, pumping)
    duration: { type: Number, required: true }, // Duration of the exercise
    durationUnit: { type: String, enum: ['seconds', 'minutes', 'hours'], default: 'minutes' }, // Unit of duration
    sets: { type: Number, }, // Number of sets
    unit: { type: String, }, // Unit of measurement (e.g., kg, lbs)
    device: { type: String,  }, // Unit of measurement (e.g., kg, lbs)
}, {
    timestamps: true
});

export const Exercise = models?.Exercise || model('Exercise', ExerciseSchema);

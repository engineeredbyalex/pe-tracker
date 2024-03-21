// Importing necessary libraries
import { Schema, model, models } from "mongoose";

// Defining the schema for update data
const UpdateSchema = new Schema({
    updatePriority: { type: String,  },
    updateName: { type: String,  },
    updateDescription: { type: String,  },
    updateCreator: { type: String, },
    updateVotes: { type: String },
    updateStatus: { type: String },
}, {
    timestamps: true
});

// Exporting the UpdateModel model
export const UpdateModel = models?.UpdateModel || model('UpdateModel', UpdateSchema);

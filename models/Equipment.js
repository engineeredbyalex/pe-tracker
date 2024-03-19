// importing mongoose schema Schema and model
import { model, models, Schema } from "mongoose"; 

const EquipmentSchema = new Schema({
    userEmail: { type: String, required: true }, 
    type: { type: String,required :true },
    brand: { type: String },
    name :{type:String},
}, {
    timestamps:true
})

export const Equipment = models?.Equipment || model('Equipment',EquipmentSchema)
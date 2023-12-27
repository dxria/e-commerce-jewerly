import mongoose from "mongoose";

const {Schema} = mongoose;

const addressSchema = new Schema(
    {
        city: {type: String},
        street: {type: String},
        workHours: {type: String},
        phoneNumber: {type: String},
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Address || mongoose.model("Address", addressSchema)
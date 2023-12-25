import mongoose from "mongoose";

const {Schema} = mongoose;

const jewelrySchema = new Schema(
    {
        title: {type: String},
        slug: {type: String},
        description: {type: String},
        price: {type: Number},
        category: {type: String},
        img: {type: String},
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Jewelry || mongoose.model("Jewelry", jewelrySchema)
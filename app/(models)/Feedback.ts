import mongoose from "mongoose";

const {Schema} = mongoose;

const feedbackSchema = new Schema(
    {
        username:{type: String},
        item: {
            title: {type: String},
            slug: {type: String},
            description: {type: String},
            price: {type: Number},
            category: {type: String},
            img: {type: String},
        },
        stars: {type: Number},
        review: {type: String}
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema)

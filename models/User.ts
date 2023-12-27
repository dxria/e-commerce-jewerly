import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "provide a username"],
        unique: [true, "this username already exists"],
    },
    email: {
        type: String,
        required: [true, "provide an email"],
        unique: [true, "this email is already registered, try another one"],
    },
    password: {
        type: String,
        required: [true, "provide a password"],
    },
},
    {
        timestamps: true,
    });

export default mongoose.models.User || mongoose.model("User", userSchema)
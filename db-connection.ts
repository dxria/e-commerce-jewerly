import mongoose from 'mongoose'

const connect = async() => {
    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect( process.env.MONGODB_URI);
        }
        
        console.log("mongo connected succesfully")
    } catch (error) {
        throw new Error("Error in connecting to db. " + error)
    }
}

export default connect;
import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    message: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    }
})

export default mongoose.model('Contact', contactSchema);
import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    yearsOfExperience: {
        type: Number,
    },
    level: {
        type: String,
    }
})

export default mongoose.model('Skills', skillsSchema);
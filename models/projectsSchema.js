import mongoose from "mongoose";

const projectsSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    tags: {
        type: [String],
    },
    githubUrl: {
        type: String,
    },
    webUrl: {
        type: String,
    }
})

export default mongoose.model('Projects', projectsSchema);
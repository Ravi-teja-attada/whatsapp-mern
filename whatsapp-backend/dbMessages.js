import mongoose from "mongoose";

const WhatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean,
})

export default mongoose.model('messagecontents', WhatsappSchema)
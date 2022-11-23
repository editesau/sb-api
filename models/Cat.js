import mongoose from "mongoose";

const Cat = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    age: { type: Number },
    favourite: { type: Boolean },
    rate: { type: Number },
    img_link: { type: String }
})
 
export default Cat
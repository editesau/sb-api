import mongoose from 'mongoose'

const Cat = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  age: { type: Number, default: 0 },
  favourite: { type: Boolean, default: false },
  rate: { type: Number, default: 0 },
  img_link: { type: String, default: '' },
})

export default Cat

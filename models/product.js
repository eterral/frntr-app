import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
    {
        title: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true },
        category: {type: String, required: true },
    },
      {timestamps: true}
)

export default mongoose.model('products', Product)
const { Schema } = require('mongoose')

const headphoneSchema = new Schema(
  {
    image: { type: Image, required: true },
    brand: { type: String, required: true },
    model_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    in_stock: { type: Boolean, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = headphoneSchema
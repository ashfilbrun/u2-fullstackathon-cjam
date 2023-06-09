const { Schema } = require('mongoose')

const speakerSchema = new Schema (
    {
        image: { type: String, required: true }, //is this correct?
        brand: { type: String, required: true },
        model_name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        in_stock: { type: Boolean, required: true },
        color: { type: String, required: true }
      },
      { timestamps: true }
)

module.exports = speakerSchema

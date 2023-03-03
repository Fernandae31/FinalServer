const { Schema, model } = require ("mongoose");

const ProductCollectionSchema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true
      },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}

);
const ProductCollection = model("ProductCollection", ProductCollectionSchema);


module.exports= ProductCollection
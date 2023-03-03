const { Schema, model } = require ("mongoose");

const FigureSchema = new Schema(
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

const Figure = model("Figure", FiguresSchema)

module.exports= Figure;
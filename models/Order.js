const { Schema, model } = require ("mongoose");

const OrderSchema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    number :{
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}

);
const Order = model("Order", OrderSchema);


module.exports= Order
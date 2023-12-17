const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    email: {
        type: String
    },
    data: [
        {

            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            size: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                default: Date.now()
            },
            img: {
                type: String,
                required: true
            }
        }
    ]


});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
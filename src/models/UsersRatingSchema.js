const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const ratingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    deliveryMensId: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    feedback: {
        type: String
    }

})

const userRatings = mongoose.model('userRatings', ratingSchema);

module.exports = userRatings


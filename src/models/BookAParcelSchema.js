const mongoose = require('mongoose')
const { Schema } = mongoose;

const parcelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    parcelType: {
        type: String,
        required: true
    },
    recieverName: {
        type: String,
        required: true
    },
    recieverPhone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    addressLatitude: {
        type: String,
        required: true
    },
    addressLongitude: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = Parcel
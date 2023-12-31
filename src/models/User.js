const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
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
    photoUrl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User

userSchema.add({
    totalDelivery: {
        type: Number
    },
    ratingGivenUser: {
        type: Number
    },
    ratings:{
        type:Number
    },
    totalRating: {
        type: Number,
    },
    averageRating: {
        type: Number
    }
})
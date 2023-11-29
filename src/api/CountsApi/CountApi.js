const Parcel = require("../../models/BookAParcelSchema")
const User = require("../../models/User")


const counts = async (req, res) => {
    const parcelBooked = await Parcel.estimatedDocumentCount()
    const parcelDelivery = await Parcel.estimatedDocumentCount({ status: "Delivered" })
    const numOfPeople = await User.estimatedDocumentCount()
    res.send({ parcelBooked, parcelDelivery, numOfPeople })
}

module.exports = counts
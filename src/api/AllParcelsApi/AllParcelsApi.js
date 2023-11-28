const Parcel = require('../../models/BookAParcelSchema')

const allParcels = async (req, res) => {
    const result = await Parcel.find()
    res.send(result)
}

module.exports = allParcels
const Parcel = require('../../models/BookAParcelSchema')

const updateBooking = async (req, res) => {
    const parcelId = req.params.id;
    const { deliveryManId, approximateDate, status } = req.body;
    // console.log(parcelId, deliveryManId,approximateDate);
    const query = { _id: parcelId }
    const updateParcel = {
        $set: {
            deliveryManId: deliveryManId,
            approximateDate: approximateDate,
            status: status
        }
    }
    const result = await Parcel.updateOne(query, updateParcel)
    res.send(result)
}

module.exports = updateBooking
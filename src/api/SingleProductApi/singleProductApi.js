
const Parcel = require('../../models/BookAParcelSchema')

const modifyParcel = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    // console.log(update);
    // console.log(id);
    const filter = { _id: id }
    let updateDoc;
    if (update.status === 'cancelled') {
        updateDoc = {
            $set: { status: update.status }
        }
    }
    else {
        updateDoc = {
            $set: {
                name: update.name,
                email: update.email,
                phoneNumber: update.phoneNumber,
                parcelType: update.parcelType,
                recieverName: update.recieverName,
                recieverPhone: update.recieverPhone,
                address: update.address,
                date: update.date,
                addressLatitude: update.addressLatitude,
                addressLongitude: update.addressLongitude,
                weight: update.weight,
                price: update.price,
                status: update.status
            }
        }
    }
    const result = await Parcel.findOneAndUpdate(filter, updateDoc)
    res.send(result)
}

module.exports = modifyParcel
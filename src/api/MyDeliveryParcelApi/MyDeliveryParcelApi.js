const Parcel = require("../../models/BookAParcelSchema");

const myDeliveryParcels = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const query = { deliveryManId: id }
    const result = await Parcel.find(query)
    res.send(result)
}

module.exports = myDeliveryParcels
const Parcel = require('../../models/BookAParcelSchema')

const bookParcel = async(req,res)=>{
    const parcel = req.body;
    // console.log(parcel);
    const result = new Parcel(parcel)
    await result.save();
    res.send(result)
}

module.exports = bookParcel
const { query } = require("express")
const Parcel = require('../../models/BookAParcelSchema')

const myParcel = async(req,res)=>{
    const email = req.query.email;
    const filter = {email:email}
    const result = await Parcel.find(filter)
    res.send(result)
}

module.exports = myParcel
const express = require("express");
const conncectDB = require("./db/connectDB");
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PPORT || 5000;

app.use(express.json())
app.use(cors())

// 
const Users = require("./routes/users/index");
const singleUser = require("./routes/singleUser/indexSingleUser")
const bookAParcel = require('./routes/BookAParcel/bookAParcel')
const myParcel = require('./routes/MyParcelRoute/myParcelRoute')
const modifyParcel = require('./routes/SingleParcelRoute/singleParcelRoute')
const updateUser = require('./routes/UpdateUserProfile/updateUserProfileRoute')
const allParcels = require("./routes/AllParcelsRoute/AllParcelsRoute")
const allUsers = require('./routes/AllUsersRoute/AllUsers')
const updateBooking = require('./routes/UpdateBookingParcel/UpdateBookingParcelRoute')
const modifyUserType = require('./routes/ModifyUserType/ModifyUserTypeRoute')
const myDeliveryParcels = require('./routes/MyDeliveryParcels/myDeliveryParcelsRoute')
const userRatings = require('./routes/UserRatingRoute/UserRatingRoute')
const myRating = require('./routes/MyRatings/MyRatingsRoute')


app.use(Users)
app.use(singleUser)
app.use(bookAParcel)
app.use(myParcel)
app.use(modifyParcel)
app.use(updateUser)
app.use(allParcels)
app.use(allUsers)
app.use(updateBooking)
app.use(modifyUserType)
app.use(myDeliveryParcels)
app.use(userRatings)
app.use(myRating)


app.get('/health', (req, res) => {
    res.send('Parcel management server is running smoothly');
})

app.all('*', (req, res, next) => {
    const error = new Error(`The requested URL is invalid : [${req.url}]`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message
    })
})


const main = async () => {
    await conncectDB();
    app.listen(port, () => {
        console.log(`Parcel management server is running on port ${port}`);
    })
}

main();


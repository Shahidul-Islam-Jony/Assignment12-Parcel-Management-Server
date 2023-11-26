const express = require("express");
const conncectDB = require("./db/connectDB");
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PPORT || 5000;

app.use(express.json())
app.use(cors())

// 
const Users = require("./routes/users/index")



app.get('/health', (req, res) => {
    res.send('Parcel management server is running smoothly');
})

// set user info into db
app.use(Users)



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


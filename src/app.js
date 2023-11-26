const express = require("express");
require ('dotenv').config();
const app = express();
const port = process.env.PPORT || 5000;





app.get('/health',(req,res)=>{
    res.send('Parcel management server is running smoothly');
})

app.all('*',(req,res,next)=>{
    const error = new Error(`The requested URL is invalid : [${req.url}]`)
    error.status = 404
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({
        message:err.message
    })
})

app.listen(port,()=>{
    console.log(`Parcel management server is running on port ${port}`);
})

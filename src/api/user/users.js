const User = require("../../models/User");


const users = async (req, res) => {
    const userInfo = req.body;
    console.log('hello');
    const result = new User(userInfo)
    await result.save();
    res.send(result)
}

module.exports = users
const User = require("../../models/User");


const users = async (req, res) => {
    const userInfo = req.body;
    const query = { email: userInfo.email }
    const isUserExists = await User.findOne(query)
    if (!isUserExists) {
        const result = new User(userInfo)
        await result.save();
        res.send(result)
    }
}

module.exports = users
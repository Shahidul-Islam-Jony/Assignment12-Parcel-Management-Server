const User = require("../../models/User");

const allUsers = async (req, res) => {
    const userType = req.params.type;
    // console.log(userType);
    const query = { type: userType }
    const result = await User.find(query)
    res.send(result)
}

module.exports = allUsers
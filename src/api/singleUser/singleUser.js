const User = require("../../models/User");

const singleUser = async (req, res) => {
    const email = req.query.email;
    const query = { email: email }
    const result = await User.findOne(query)
    res.send(result)
}

module.exports = singleUser
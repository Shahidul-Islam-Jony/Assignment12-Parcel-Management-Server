const User = require("../../models/User");

const updateUser = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const imageUrl = req.body.photoUrl;
    // console.log(imageUrl);
    const filter = { _id: id }
    const updateImage = {
        $set: {
            photoUrl: imageUrl
        }
    }
    const result = await User.findOneAndUpdate(filter, updateImage)
    res.send(result)
}

module.exports = updateUser
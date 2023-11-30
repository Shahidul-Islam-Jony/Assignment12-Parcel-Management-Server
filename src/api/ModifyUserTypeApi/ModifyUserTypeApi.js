const User = require("../../models/User");

const modifyUser = async (req, res) => {
    const id = req.params.id;
    const { type, totalDelivery, ratingGivenUser, ratings, totalRating, averageRating } = req.body;
    // console.log(id, type);
    const query = { _id: id }
    const updateType = {
        $set: {
            type: type,
            totalDelivery: totalDelivery,
            ratingGivenUser: ratingGivenUser,
            ratings: ratings,
            totalRating: totalRating,
            averageRating: averageRating
        }
    }
    const result = await User.findOneAndUpdate(query, updateType)
    res.send(result);
}

module.exports = modifyUser
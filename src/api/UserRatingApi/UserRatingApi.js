const userRatings = require("../../models/UsersRatingSchema");


const userRating = async (req, res) => {
    const ratingData = req.body;
    // console.log(ratingData);
    const result = new userRatings(ratingData)
    await result.save();
    res.send(result)
}

module.exports = userRating
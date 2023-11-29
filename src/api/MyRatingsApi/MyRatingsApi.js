const userRatings = require("../../models/UsersRatingSchema");


const myRatings = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const query = { deliveryMensId: id }
    const result = await userRatings.find(query)
    res.send(result)
}

module.exports = myRatings
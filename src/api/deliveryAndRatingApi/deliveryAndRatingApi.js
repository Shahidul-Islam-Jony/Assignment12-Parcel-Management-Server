const User = require("../../models/User");


const deliveryAndRating = async (req, res) => {
    const id = req.body.id;
    // console.log(id);
    let update;
    if (!req?.body?.ratings) {
        const query = { deliveryManId: id }
        update = {
            $inc: { totalDelivery: 1 }
        }
    }
    if (req?.body?.ratings) {
        const query = { _id: id }
        const findUser = await User.findOne(query)
        console.log(findUser);
        console.log(req.body.ratings);
    }

    // const result = await User.findOneAndUpdate(query, update)
    // res.send(result)
}

module.exports = deliveryAndRating
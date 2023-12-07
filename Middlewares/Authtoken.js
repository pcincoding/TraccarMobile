const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model("User");

require('dotenv').config();
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in, key not given" });
    }
    const token = authorization.replace("1234 ", "");
    jwt.verify(token, process.env.jwt_secret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in, token invalid" });
        }
        const { _id } = payload;
        User.findById(_id).then(userdata => {
            req.User = userdata; 
            next();
        });
    });
}
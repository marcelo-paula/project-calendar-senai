const jwt = require("jsonwebtoken")

exports.createToken = async (obj) => {
    const token = await jwt.sign(obj, "c6c5b1216984763b48b3dfc2c220abe418482753", {
        expiresIn: "1d"
    })
    return token
}

exports.verifyToken = async (token) => {
    return jwt.verify(token, "c6c5b1216984763b48b3dfc2c220abe418482753")
}
const login = require("../model/users/login")
const tokenAdapter = require("../adapter/token")

async function validaLogin(req,res){
    try {
        const {email, password} = req.body
        const userLog = await login.validationLogin(email, password)
        const token = await tokenAdapter.createToken({
            user: userLog
        })
        res.status(200).json({error: false, data: {token: token}})
    } catch (error) {
        res.status(401)
        res.json({error: error.message, data: false})
    }
}

module.exports = {
    validaLogin
}
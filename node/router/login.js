const { Router } = require("express")

const {
    validaLogin
} = require("../controller/login")

const router = Router()

router.post("/", validaLogin)

module.exports = router
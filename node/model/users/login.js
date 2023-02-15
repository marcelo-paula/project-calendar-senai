// fs vai ser para poder ler e escrever arquivos de dados
const fs = require("fs")
const tableUser = require("./tableUser")
const bcrypt = require('bcrypt');

async function validationLogin(email, password){
    const user = await tableUser.findOne({
        where: {
            email: email
        }
    })

    if (!user){
        throw new Error("E-Mail informados não estão corretos")
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error("Senha incorreta");
    }

    return user
}

module.exports = {
    validationLogin
}
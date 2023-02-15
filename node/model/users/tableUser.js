const Sequelize = require("sequelize")
const dataBase = require("../../bd/db")

const Calendar = dataBase.define('users', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Calendar.sync({
    force: false
}).then(()=>{
    console.log("Tabela criada com sucesso!")
})

module.exports = Calendar
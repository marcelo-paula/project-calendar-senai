const Sequelize = require("sequelize")
const dataBase = require("../bd/db")

const Calendar = dataBase.define('calendar', {
    year:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Calendar.sync({
    force: false
}).then(()=>{
    console.log("Tabela criada com sucesso!")
})

module.exports = Calendar
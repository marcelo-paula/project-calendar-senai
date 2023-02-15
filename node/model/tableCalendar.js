const Sequelize = require("sequelize")
const dataBase = require("../bd/db")

const Calendar = dataBase.define('calendar', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    year:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Calendar
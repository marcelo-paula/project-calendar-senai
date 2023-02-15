const Sequelize = require("sequelize")
const sequelize = new Sequelize('app','root','', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize
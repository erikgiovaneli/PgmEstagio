const Sequelize = require('sequelize')

//Conexão com o bd MySql
const sequelize = new Sequelize('comapp','root','123456',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
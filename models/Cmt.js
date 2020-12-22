const db = require('./db')

//Criar a Tabela comentario
const Cmt = db.sequelize.define('comentario', {
    comentario: {
        type: db.Sequelize.TEXT
    }
})

//Comentar depois de utilizar 
Cmt.sync({force: true })

module.exports = Cmt
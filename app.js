const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cmt = require('./models/Cmt')
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

/*const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'gAWhHyWkY9kTzcSlILgXb6bFGh0uEy_FjwtFmFHRPk6X',
  }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/be72b159-7fd4-4cb5-b3ca-ec1014e08fe0',
});*/

//Configurações
    //Template Engine
    app.engine('handlebars',handlebars({ defaultLayout:'main' }))
    app.set('view engine', 'handlebars')
    //Body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    //Rota para aparecer o cadastro de comentarios e a lista
    app.get('/', function(req, res){
        Cmt.findAll().then(function(cmts){
            res.render('home', {cmts: cmts})
        })
    })

    //Rota para adicionar o comentario no banco de dados
    app.post('/add', function(req, res){
        Cmt.create({
            comentario: req.body.cmt
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("ERRO: " + erro)
        })
        
    })

//Checar se o servidor está funcionando
app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
})
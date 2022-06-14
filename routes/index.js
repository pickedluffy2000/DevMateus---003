var conn = require('./../inc/db');
var express = require('express');
var reservations = require('./../inc/reservations');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'OneAcademy'});
});

router.get('/gyms', function(req, res, next){

  res.render('gyms', {
  title: 'Gym - OneAcademy'});

});


router.get('/about', function(req, res, next){

  res.render('about', {
    title: 'About - OneAcademy'});
});


router.get('/plans', function(req, res, next){

  res.render('plans', {
  title: 'Plans - OneAcademy',
  background: 'img/Chris-Bumstead.jpg'
});

});


router.get('/reservations', function(req, res, next){

  reservations.render(req, res);

});

//validacao do formulario 
router.post('/reservations', function(req, res, next){

  if(!req.body.name){
    //res.send("Digite o email");
    reservations.render(req, res, "Digite o nome");
  } else if(!req.body.email){
   // res.send("Digite o email");
    reservations.render(req, res, "Digite o e-mail");
  }else if(!req.body.date){
    //res.send("Selecione a data de nascimento");
    reservations.render(req, res, "Selecione a data de nascimento");
  }else if(!req.body.gender){
    //res.send("Selecione o sexo");
    reservations.render(req, res, "Selecione o sexo");
  }else if(!req.body.Message){
    //res.send("Escreva alguma mensagem...");
    reservations.render(req, res, "Escreva alguma mensagem");
  } else{
    reservations.save(req.body).then(results => {

      req.body = {};

      reservations.render(req, res, null, "Reserva concluida com sucesso!");

    }).catch(err=>{

      reservations.render(req, res, err.message);

    });
  }

});


module.exports = router;

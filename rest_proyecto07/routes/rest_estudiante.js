var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const estudiante = require('../models').student;

router.get('/findAll/json', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

  estudiante.findAll({  
      attributes: { exclude: ["name"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});

module.exports = router;
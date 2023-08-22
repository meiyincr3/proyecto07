var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* ACCEDA AL MÓDULO jwt */
const jwt = require('jsonwebtoken');

/* ACCEDA AL MODELO usuario */
const Usuario = require('../models').usuario;
const { Op } = require("sequelize");


/* MANEJADOR DE LA RUTA '/login' */
router.post('/login', function (req, res, next) {

  const { nombre, contrasena } = req.body;

  Usuario.findOne({
    where: {
      [Op.and]: [
        { nombre: nombre },
        { contrasena: contrasena }
      ]
    }
  })
    .then(resultado => {

      /* GENERE EL accessToken CON LOS DATOS CIFRADOS */
      const accessToken = jwt.sign({ nombre: resultado.nombre, rol: resultado.rol }, process.env.TOKEN_SECRET);

      res.json({
        accessToken
      });

    })
    .catch(error => res.status(400).send(error))

});

module.exports = router;

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('estudiante', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idestudiante: 1,
        nombre: 'Alice',
        //apellido: 'Stay',
        email : 'alice@espol.edu.ec',
        //edad: 25
      },
      {
        idestudiante: 2,
        nombre: 'Bob',
        //apellido: 'Constructor',
        email : 'bob@espol.edu.ec',
        //edad: 28
      }
      ], {});
   },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('estudiante', null, {});
  }
};

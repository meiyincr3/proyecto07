'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profesor', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idprofesor: 1,
        nombre: 'Marisol',
        email : 'marisol@espol.edu.ec',
        especializacion: 'Human Computer Interaction'
      },
      {
        idprofesor: 2,
        nombre: 'Gabriel',
        email : 'gabriel@espol.edu.ec',
        especializacion: 'Information Security'
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
    await queryInterface.bulkDelete('profesor', null, {});
  }
};

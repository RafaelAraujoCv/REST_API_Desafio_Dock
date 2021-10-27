'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
				nome: 'Rafael Araujo',
				cpf: 41997309800,
				dataNascimento: "1993-06-04",
        createdAt: new Date(),
				updatedAt: new Date()	
			}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};

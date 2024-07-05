module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('Questions', 'startTime');
    await queryInterface.removeColumn('Questions', 'duration');
  },
  down: async () => {},
};

module.exports = (sequelize, Sequelize) => {
  const Animal_categories = sequelize.define("animal_categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    category: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
  });

  return Animal_categories;
};

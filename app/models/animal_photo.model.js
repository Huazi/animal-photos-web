module.exports = (sequelize, Sequelize) => {
  const Animal_photos = sequelize.define('animal_photos', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    photo_url: {
      type: Sequelize.STRING,
    },
    category_id: {
      type: Sequelize.INTEGER,
    },
  }, {
    timestamps: false,
  });

  return Animal_photos;
};

const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Animal_categories = require('./animal_category.model')(sequelize, Sequelize);
db.Animal_photos = require('./animal_photo.model')(sequelize, Sequelize);

// db.Animal_categories.hasMany(db.Animal_photos, { as: 'animal photos' });
// db.Animal_photos.belongsTo(db.Animal_categories, {
//   foreignKey: 'category_id',
//   targetKey: 'id',
// });

module.exports = db;

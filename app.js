const express = require('express');
const expressWinston = require('express-winston');
const path = require('path');
const cookieParser = require('cookie-parser');

const authRouter = require('./app/routes/auth');
const animal_categoriesRouter = require('./app/routes/animal_categories');
const animal_photoRouter = require('./app/routes/animal_photos');
const {auth_middleware, auth_router} = require('./app/routes/auth.routes');
const {usertest_router} = require('./app/routes/usertest.routes');
// database
const db = require("./app/models");
const {initial_data} = require("./app/config/initial_data");

const cors = require("cors");

const createApp = (logger) => {
  const app = express();


// db.sequelize.sync();
// force: true will drop the table if it already exists
force_resync_db = process.env.FORCE_RESYNC_DB  || false;
db.sequelize.sync({force: force_resync_db}).then(() => {
  console.log('Drop and Resync Database with { force: ' + force_resync_db + ' }');
  initial_data();
  console.log('Done to connect to database.');
}).catch(err => {
  console.error("Got error when resync and initial database: " + err.message);
});


  const corsOptions = {
    origin: "*"
  }

  app.use(cors(corsOptions));

  app.use(expressWinston.logger({ winstonInstance: logger }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // TODO: Serve your React App using the express server
  const buildPath = path.normalize(path.join(__dirname, './client/build'));
  app.use(express.static(buildPath));

  app.use('/auth', authRouter);
  app.use('/animal_categories', animal_categoriesRouter);
  app.use('/animal_photos', animal_photoRouter);
  auth_middleware(app);
  app.use('/api/auth', auth_router);
  app.use('/api/test', usertest_router);

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).send('Not found');
  });

  // error handler
  app.use((err, req, res) => {
    res.status(err.status || 500);
  });

  return app;
};

module.exports = createApp;

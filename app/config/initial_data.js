var bcrypt = require("bcryptjs");
const db = require("../models/index");
const Role = db.role;
const User = db.user;

module.exports.initial_data = () =>  {
  Role.findOne({
    where: {
      name: 'admin'
    }
  })
    .then(role => {
      if (role) {
        return;
      }

      Role.create({
        id: 1,
        name: "user"
      }).catch(err => {
          console.error("Got Error when create user role " + err.message);
        });

      Role.create({
        id: 2,
        name: "moderator"
      }).catch(err => {
          console.error("Got Error when create moderator role " + err.message);
        });

      Role.create({
        id: 3,
        name: "admin"
      }).then(role => {
        User.create({
            username: process.env.ADMIN_USERNAME ||  "admin",
            email: process.env.ADMIN_EMAIL ||  "admin@demo.com",
            password: bcrypt.hashSync(process.env.ADMIN_PASSWORD ||  "admin123", 8)
        }).then(user => {
            user.setRoles(role);
            console.log("create default admin account: admin/admin123 for demo and testing.");
        }).catch(err => {
          console.error("Got Error when setup initial admin account: " + err.message);
        });
      }).catch(err => {
          console.error("Got Error when create admin role " + err.message);
        });

    });

    console.log('Done to initial data in the datababse.');
};

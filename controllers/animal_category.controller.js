const db = require("../models");
const Animal_category = db.Animal_categories;
const Op = db.Sequelize.Op;

// Create and Save a new Animal_categories
exports.create = (req, res) => {
  // Validate request
  if (!req.body.category) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Animal_categories
  const animal_categories = {
    category: req.body.category
  };

  // Save Animal_categories in the database
  Animal_category.create(animal_categories)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Animal_categories."
      });
    });
};

// Retrieve all Animal_categories from the database.
exports.findAll = (req, res) => {
  Animal_category.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Animal_categories."
      });
    });
};

// Find a single Animal_categories with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Animal_category.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Animal_categories with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Animal_categories with id=" + id
      });
    });
};

// Update a Animal_categories by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Animal_category.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Animal_categories was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Animal_categories with id=${id}. Maybe Animal_categories was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Animal_categories with id=" + id
      });
    });
};

// Delete a Animal_categories with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Animal_category.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Animal_categories was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Animal_categories with id=${id}. Maybe Animal_categories was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Animal_categories with id=" + id
      });
    });
};

// Delete all Animal_categories from the database.
exports.deleteAll = (req, res) => {
  Animal_category.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Animal_categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Animal_categories."
      });
    });
};


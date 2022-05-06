const db = require('../models');

const Animal_photo = db.Animal_photos;
const { Op } = db.Sequelize;

// Create and Save a new photo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.photo_url) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a photo
  const photo = {
    category_id: req.body.category_id,
    photo_url: req.body.photo_url,
  };

  // Save photo in the database
  Animal_photo.create(photo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the photo.',
      });
    });
};

// Retrieve all Animal_photos from the database.
exports.findAll = (req, res) => {
  console.log(`query value: ${req.query.categoryids}`);
  const { categoryids } = req.query;
  let condition = {};

  if (categoryids) {
    const cArray = categoryids.split(',');
    const { in: opIn } = Op;
    condition = { category_id: { [opIn]: cArray } };
  }

  Animal_photo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Animal_photos.',
      });
    });
};

// Find a single photo with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Animal_photo.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find photo with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving photo with id=${id}`,
      });
    });
};

// Update a photo by the id in the request
exports.update = (req, res) => {
  const { id } = req.params;

  Animal_photo.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'photo was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update photo with id=${id}. Maybe photo was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating photo with id=${id}`,
      });
    });
};

// Delete a photo with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Animal_photo.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'photo was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete photo with id=${id}. Maybe photo was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete photo with id=${id}`,
      });
    });
};

// Delete all Animal_photos from the database.
exports.deleteAll = (req, res) => {
  Animal_photo.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Animal_photos were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Animal_photos.',
      });
    });
};

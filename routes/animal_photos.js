const express = require('express');
const router = express.Router();

const Animal_photos_controller = require('../controllers/animal_photo.controller');

// Create a new Tutorial
router.post("/", Animal_photos_controller.create);

// Retrieve all Animal_photos
router.get("/", Animal_photos_controller.findAll);


// Retrieve a single Tutorial with id
router.get("/:id", Animal_photos_controller.findOne);

// Update a Tutorial with id
router.put("/:id", Animal_photos_controller.update);

// Delete a Tutorial with id
router.delete("/:id", Animal_photos_controller.delete);

// Delete all Tutorials
router.delete("/", Animal_photos_controller.deleteAll);

module.exports = router;
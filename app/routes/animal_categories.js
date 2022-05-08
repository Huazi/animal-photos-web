const express = require('express');
const router = express.Router();

const Animal_categories_controller = require('../controllers/animal_category.controller');

// Create a new Tutorial
router.post("/", Animal_categories_controller.create);

// Retrieve all Animal_categories
router.get("/", Animal_categories_controller.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", Animal_categories_controller.findOne);

// Update a Tutorial with id
router.put("/:id", Animal_categories_controller.update);

// Delete a Tutorial with id
router.delete("/:id", Animal_categories_controller.delete);

// Delete all Tutorials
router.delete("/", Animal_categories_controller.deleteAll);

module.exports = router;
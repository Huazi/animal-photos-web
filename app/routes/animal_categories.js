const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");
const Animal_categories_controller = require('../controllers/animal_category.controller');

// Create a new Category
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], Animal_categories_controller.create);

// Retrieve all Animal_categories
router.get("/", Animal_categories_controller.findAll);

// Retrieve a single Category with id
router.get("/:id", Animal_categories_controller.findOne);

// Update a Category with id
router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], Animal_categories_controller.update);

// Delete a Category with id
router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], Animal_categories_controller.delete);

// Delete all Categories
router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], Animal_categories_controller.deleteAll);

module.exports = router;

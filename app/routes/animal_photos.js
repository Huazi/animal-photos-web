const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");
const Animal_photos_controller = require('../controllers/animal_photo.controller');

// Create a new Photo
router.post("/", [authJwt.verifyToken], Animal_photos_controller.create);

// Retrieve all Animal_photos
router.get("/", Animal_photos_controller.findAll);


// Retrieve a single Photo with id
router.get("/:id", Animal_photos_controller.findOne);

// Update a Photo with id
router.put("/:id", [authJwt.verifyToken], Animal_photos_controller.update);

// Delete a Photo with id
router.delete("/:id", [authJwt.verifyToken], Animal_photos_controller.delete);

// Delete all Photos
router.delete("/",  [authJwt.verifyToken, authJwt.isAdmin], Animal_photos_controller.deleteAll);

module.exports = router;

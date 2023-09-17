// Create web server

// Import express
const express = require("express");

// Import comment controller
const commentsController = require("../controllers/commentsController");

// Create router
const router = express.Router();

// Create route to get all comments
router.get("/", commentsController.getAllComments);

// Create route to get a specific comment
router.get("/:id", commentsController.getComment);

// Create route to create a comment
router.post("/", commentsController.createComment);

// Create route to update a comment
router.put("/:id", commentsController.updateComment);

// Create route to delete a comment
router.delete("/:id", commentsController.deleteComment);

// Export router
module.exports = router;
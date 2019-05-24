const router = require("express").Router();

const {
  getAllNotes, 
  getNoteById, 
  createNote, 
  updateNote, 
  deleteNote
} = require("../../controllers/noteController");

//define routes

//get and post routes for /api/notes
router 
  .route("/")
  .get(getAllNotes)
  .post(createNote);

  //Get/Put/Delete routes for /api/notes/:id
  router
    .route("/:id")
    .get(getNoteById)
    .put(updateNote)
    .delete(deleteNote);

    module.exports = router;

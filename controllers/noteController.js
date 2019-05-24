const { Note } = require("../models");


//Get ALL notes
function getAllNotes(req, res) {

  Note
    .find({})
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

}

//Get a single Note
function getNoteById(req, res) {

  Note.findById(req.params.id)
  .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//POST (create) a new note
function createNote(req, res) {
  Note
    .create(req.body)
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//PUT (update) a note by its ID
function updateNote(req, res) {
  Note
    .findByIdAndUpdate(req.params.id, 
      {
        $set: {
          title: req.body.title,
          body: req.body.body
          }
        }, 
        {
          new: true
        })
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//Delete a note by its ID
function deleteNote(req, res) {
  Note
    .remove({
      _id: req.params.id
    })
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//export all functions as methods we can import into route definitions

module.exports = {
  getAllNotes,
  getNoteById,
  updateNote,
  createNote,
  deleteNote
}
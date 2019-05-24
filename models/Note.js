const mongoose = require("mongoose");

const {Schema} = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Note = mongoose.model("note", NotesSchema);

module.exports = Note;
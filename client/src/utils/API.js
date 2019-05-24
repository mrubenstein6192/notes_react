import axios from "axios";

//set up functions for talking to our backend

//getAllNotes
export const getAllNotes = () => {
  return axios.get("/api/notes")
}

//getNotesById
export const getNotesById = (noteId) => {
  return axios.get(`/api/notes/${noteId}`)
}

export const createNote = (noteInfo) => {
  return axios.post("/api/notes", noteInfo)
}

//updateNote
export const updateNote = (noteId, noteInfo) => {
  return axios.put(`/api/notes/${noteId}`, noteInfo)
}

//deleteNote
export const deleteNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`);
}

//export all functions so if someone needs to import all they can
export default {
  getAllNotes,
  getNotesById,
  createNote,
  updateNote,
  deleteNote
}
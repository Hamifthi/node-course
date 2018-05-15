// console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes()
    var returnedNote = notes.filter((note) => note.title === title)
    return returnedNote[0]
};

var removeNote = (title) => {
  //fetch note
  var notes = fetchNotes();
  //finding note and removing note
  var filteredNotes = notes.filter((note) => note.title !== title)
  //save new note
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};

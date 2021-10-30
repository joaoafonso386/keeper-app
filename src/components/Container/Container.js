import React, { useState } from "react";

import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";



export default function Container({ darkMode }) {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  };

  const editNote = (newNote) => {
    const tobeUpdated = notes.find((note) => note.id === newNote.id);
    tobeUpdated.id = newNote.id;
    tobeUpdated.title = newNote.title;
    tobeUpdated.content = newNote.content;
    setNotes([...notes]);
  };

  return (
    <div>
      <CreateArea darkMode={darkMode} addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            darkMode={darkMode}
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        );
      })}
    </div>
  );
}

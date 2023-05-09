import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreatePost from "./CreatePost";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(newNote) {
    setNote((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNote((previousNotes) => {
      return previousNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreatePost onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

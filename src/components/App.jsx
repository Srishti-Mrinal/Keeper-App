import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import ParticleBackground from "../ParticleBackground";

function App() {
  let [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(newNote);
    setNotes((prevVal) => {
      return [...prevVal, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      // console.log(id);

      return prevNotes.filter((notes, idx) => {
        // console.log("this is idx" + idx);
        return id !== idx;
      });
    });
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-1 !important",
      }}
    >
      <ParticleBackground />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Header />
        <CreateArea addNote={addNote} deleteNote={deleteNote} />

        <div
          className="notediv"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignContent: "flex-start",
            height: "calc(100% - 20rem)",
            overflowY: "auto",
            marginTop: "1.8rem",
          }}
        >
          {notes.map((props, idx) => {
            return (
              <Note
                key={idx}
                id={idx}
                title={props.title}
                content={props.content}
                addNote={addNote}
                deleteNote={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

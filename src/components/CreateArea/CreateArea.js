import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "grey",
    "& input, textarea": {
      backgroundColor: "grey",
      color: "white",
      cursor: "text",
    },
    "& input::placeholder": {
      color: "white",
    },
    "& textarea::placeholder": {
      color: "white",
    },
  },
  button: {
    backgroundColor: "darkcyan",
  },
  emptyNote: {
    color: "white",
  },
}));

export default function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    id: 0,
    title: "",
    content: "",
  });
  const [expandedNote, setExpandedNote] = useState(false);
  const [emptyNote, setEmptyNote] = useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const note = {
      ...noteText,
      id,
    };

    if (note.title === "" || note.content === "") {
      setEmptyNote(true);
      return;
    } else {
      setEmptyNote(false);
    }

    props.addNote(note);
    setNoteText({ title: "", content: "" });
  };

  const { title, content } = noteText;

  return (
    <div>
      {emptyNote ? (
        <p
          role="alert"
          style={{
            margin: "20px auto",
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
          className={props.darkMode ? classes.emptyNote : ""}
        >
          Please fill all fields
        </p>
      ) : (
        ""
      )}
      <form className={props.darkMode ? classes.container : ""}>
        {expandedNote && (
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            autoComplete="off"
          />
        )}
        <textarea
          name="content"
          value={content}
          row={expandedNote ? "6" : "1"}
          placeholder="Take a note..."
          onChange={handleChange}
          onClick={() => setExpandedNote(true)}
        />
        <Zoom in={expandedNote}>
          <Fab
            aria-label="add"
            color={props.darkMode ? "" : "primary"}
            className={
              props.darkMode ? `${classes.button} addnote-btn` : "addnote-btn"
            }
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

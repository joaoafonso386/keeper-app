import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { GithubPicker } from "react-color";

const useStyles = makeStyles(() => ({
  noteDark: {
    backgroundColor: "#5E6973",
    "& button": {
      color: "white",
      backgroundColor: "#5E6973",
    },
    "& h1,p": {
      color: "black",
    },
    "& input, textarea, form": {
      backgroundColor: "#5E6973",
      color: "black",
    },
    "& svg": {
      fill: "black",
    },
  },
}));

export default function Note(props) {
  const [edit, setEdit] = useState(false);
  const [pickColor, setPickColor] = useState("#fff");
  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
  });
  const classes = useStyles();

  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  const showEdit = () => {
    setEdit((prevValue) => (prevValue ? false : true));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editNote(note);
    setEdit(false);
  };

  return (
    <div
      style={{ backgroundColor: pickColor }}
      className={props.darkMode ? `${classes.noteDark} note` : "note"}
    >
      {edit ? (
        <form style={{ backgroundColor: pickColor }} className="edit-form">
          <input
            style={{ backgroundColor: pickColor }}
            className="change-input"
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            style={{ backgroundColor: pickColor }}
            className="change-textarea"
            name="content"
            value={note.content}
            onChange={handleChange}
          ></textarea>
          <button
            style={{ backgroundColor: pickColor }}
            className="change-button"
            type="submit"
            onClick={handleSubmit}
          >
            <EditRoundedIcon />
          </button>
          <GithubPicker onChangeComplete={(color) => setPickColor(color.hex)} />
        </form>
      ) : (
        <div onDoubleClick={showEdit} style={{ backgroundColor: pickColor }}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button style={{ backgroundColor: pickColor }} onClick={handleDelete}>
            <DeleteForeverRoundedIcon
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

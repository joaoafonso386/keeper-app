import { makeStyles } from "@mui/styles";
import React from "react";
import MaterialSwitch from "../Switch/Switch";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2A2B2F",
  },
}));

export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <header
      className={darkMode ? classes.header : ""}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h1>Keeper</h1>
      <MaterialSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

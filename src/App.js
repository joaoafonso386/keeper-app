import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import "./styles/style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
    root: {
      backgroundColor: "blue",
    },
  });

  darkMode
    ? (document.body.style.backgroundColor = "#202124")
    : (document.body.style.backgroundColor = "white");

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container darkMode={darkMode} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

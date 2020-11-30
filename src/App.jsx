import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="App">
      {/**Navbar */}
      <NavBar />
      {/**Banner */}
      <Banner />
      {/**Each row is going to have a different request from others as you can see */}
      <Row
        title="Harrypotter"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=harry%20potter"}
      />
      <Row
        title="Batman"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=batman"}
      />
      <Row
        title="Spider Man"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=spider%20man"}
      />
    </div>
  );
}

export default App;

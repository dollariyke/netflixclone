import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav.jsx";

function App() {
  return (
    <div className="App">
      {/**Navbar */}
      <Nav />
      {/**Banner */}
      <Banner />
      {/**Each row is going to have a different request from others as you can see */}
      <Row
        title="Harrypotter"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=harry%20potter"}
        isLargeRow
      />
      <Row
        title="Batman"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=batman"}
      />
      <Row
        title="Lord Of The Ring"
        fetchUrl={"http://www.omdbapi.com/?apikey=fef030f5&s=horror"}
      />
    </div>
  );
}

export default App;

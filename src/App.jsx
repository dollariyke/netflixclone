import React from "react";
import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      {/**Navbar */}
      {/**Banner */}
      {/**Each row is going to have a different request from others as you can see */}
      <Row
        title="Harrypotter"
        fetchUrl={"https://www.omdbapi.com/?apikey=fef030f5&s=harry%20potter"}
        isLargeRow
      />
      <Row
        title="Batman"
        fetchUrl={"https://www.omdbapi.com/?apikey=fef030f5&s=batman"}
      />
      <Row
        title="Lord Of The Ring"
        fetchUrl={
          "https://www.omdbapi.com/?apikey=fef030f5&s=lord%20of%20the%20ring"
        }
      />
    </div>
  );
}

export default App;

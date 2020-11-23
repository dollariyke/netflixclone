import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1> Hey! Ikemba let's build Netflix clone frontend</h1>
      {/**Each row is going to have a different request from others as you can see */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;

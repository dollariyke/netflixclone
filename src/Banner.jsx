import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className="banner">
      <div className="banner_contents">
        {/**Background image */}
        {/**Title */}
        {/**Div> 2 buttons*/}
        {/**description */}
      </div>
    </header>
  );
}

export default Banner;

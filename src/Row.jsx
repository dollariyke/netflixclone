/** This component is for building the different row categories of the netflixclone website. */
import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code which runs based on a specific condition/variable.
  // We want to be able to pull information from an API so we will use UseEffect to retrieve information and feed the rows.
  // If the [] is left blank, it will run once when the page loads and dont run again

  useEffect(() => {
    // you will have to run an async function to fetch the data,

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //axios has created the baseURL already and the above code will attach the fetchUrl string to the baseUrl, so that the complete fetch will be done
      setMovies(request.data.results);
      //The above method hold the data that is passed into the moves variable as an array
      return request;
    }
    //Then call the function
    fetchData();
  }, [fetchUrl]);
  //whenever there is a variable passed from outside the block and used in the asynchronous function you must pass it into the empty array bracket.
  console.log(movies);
  return (
    <div className="row">
      {/**title */}
      <h2>{title}</h2>
      {/**Container Poster*/}
      <div className="row_posters">
        {/**several row-posters*/}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className="row_poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;

/** with restructuring
 * props.title = title
 * props.fetch = fetch
 * states is like short term memory, it disapppears on refresh, state is a way to write variables in react,
 * for instance, the way to write a states is like this
 * const [variable, function] = useState([]), this is set to an empty array, This is written outside the return method.
 * useState() is called a hook.
 * const [movies,setMovies] = useState([])
 *always remember to pass your "key" when you are mapping list of over 20 items.
 */

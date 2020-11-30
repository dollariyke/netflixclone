/** This component is for building the different row categories of the netflixclone website. */

import React from "react";
import "./Row.css";

class Row extends React.Component {
  state = {
    movieDetails: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({ loading: true });
    this.fetchMovie();
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(this.props.fetchUrl);
      if (response.ok) {
        let results = await response.json();
        this.setState({ movieDetails: results.Search, loading: false });
      } else {
        console.log("an error happened!");
        this.setState({ loading: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="row">
        <h2>{this.props.title}</h2>
        <div className="row_posters">
          {this.state.movieDetails.slice(0, 8).map((movie, index) => {
            return (
              <img
                key={index}
                className="row_poster"
                src={movie.Poster}
                alt={movie.Type}
              />
            );
          })}
        </div>
      </div>
    );
  }
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

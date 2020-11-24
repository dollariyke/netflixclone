import React from "react";
import "../src/Banner.css";

class Banner extends React.Component {
  state = {
    movieDetails: {},
    loading: true,
  };
  componentDidMount = async () => {
    this.fetchMovie();
  };

  fetchMovie = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=fef030f5&s=horror"
      );
      if (response.ok) {
        let results = await response.json();

        let movieRandom =
          results.Search[Math.floor(Math.random() * results.Search.length)];

        this.setState({
          movieDetails: movieRandom,
          loading: false,
        });
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
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${this.state.movieDetails.Poster})`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{this.state.movieDetails.Title}</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
}

export default Banner;

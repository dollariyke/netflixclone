import React from "react";
import "./Nav.css";

//Add a scroll listener function

class NavBar extends React.Component {
  state = {
    show: false,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  };

  render() {
    return (
      <div className={`nav ${this.state.show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <div className="mainNav">
          <div className="nav-links">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#about">Tv Shows</a>
            <a href="#contact">Movies</a>
            <a href="#contact">Recently Added</a>
            <a href="#contact">My List</a>
          </div>
          <div className="search-container">
            <form>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
          alt="Netflix Logo"
        />
      </div>
    );
  }
}

export default NavBar;

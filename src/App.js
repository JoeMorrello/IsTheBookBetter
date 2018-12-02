import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import BookOrMovieComponent from "./BookOrMovieComponent";
import ReviewComparator from "./ReviewComparator";

const TMBDKey = process.env.REACT_APP_TMDB_KEY;


class App extends Component {
  constructor() {
    super();

    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      titleSearch: "",
      movie: {
        title: "movieTitle",
        director: "director",
        rating: 0,
        image: "movieImage",
        loaded: false
      },
      book: {
        title: "bookTitle",
        author: "author",
        rating: 5,
        image: "bookImage",
        loaded: false
      },
      whichIsBetter: "",
      bookCover: "",
      moviePoster: ""
    };
  }

  handleBookChange(event) {
    this.setState({
      titleSearch: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          TMBDKey +
          "&query=" +
          this.state.titleSearch
      )
      .then(res => {
        let moviePoster =
          "https://image.tmdb.org/t/p/w500" + res.data.results[0].poster_path;
        let img = new Image();
        img.src = moviePoster;

        this.setState({
          movie: {
            title: res.data.results[0].title,
            director: "",
            image: moviePoster,
            rating: res.data.results[0].vote_average,
            loaded: true
          }
        });
      });

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.state.titleSearch +
          "&orderBy=relevance"
      )
      .then(res => {
        let rating = Object.is(
          res.data.items[0].volumeInfo.averageRating,
          undefined
        )
          ? null
          : res.data.items[0].volumeInfo.averageRating;

        this.setState({
          book: {
            title: res.data.items[0].volumeInfo.title,
            image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            author: res.data.items[0].volumeInfo.authors[0],
            rating: rating * 2, //res.data.items[0].volumeInfo.averageRating * 2,
            loaded: true
          }
        });
      });

    if (this.state.book.rating > this.state.movie.rating) {
      this.setState({
        whichIsBetter: "The Book is Better!"
      });
    } else {
      this.setState({
        whichIsBetter: "The Movie is Better!"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <h1>Is the Book Better, or the Movie?</h1>
          <input
            type="text"
            onChange={this.handleBookChange}
            value={this.state.titleSearch}
            onKeyPress={this.handleKeyPress}
          />
          <button className="submitButton" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div className="comparisonContainer">
          {this.state.book.loaded && (
            <BookOrMovieComponent item={this.state.book} />
          )}
          {this.state.movie.loaded && (
            <BookOrMovieComponent item={this.state.movie} />
          )}
        </div>
        {this.state.book && this.state.movie.loaded && (
          <ReviewComparator phrasing={this.state.whichIsBetter} />
        )}
      </div>
    );
  }
}

export default App;
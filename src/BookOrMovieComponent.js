import React, { Component } from 'react';

class BookOrMovieComponent extends Component {
    render() {
      return (
        <div className="BookOrMovieComponent">
          <h2>{this.props.item.title}</h2>
          <img className="CompareImage" src={this.props.item.image} alt=""/>
          <h3>{this.props.item.author}</h3>
          <h4>{this.props.item.rating}</h4>
        </div>
      );
    }
  }

export default BookOrMovieComponent;
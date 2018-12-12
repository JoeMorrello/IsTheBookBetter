import React, { Component } from 'react';

class BookOrMovieComponent extends Component {
    render() {
      return (
        <div className="BookOrMovieComponent">
          <img className="CompareImage" src={this.props.item.image} alt=""/>
          <h4>{this.props.item.rating}</h4>
        </div>
      );
    }
  }

export default BookOrMovieComponent;
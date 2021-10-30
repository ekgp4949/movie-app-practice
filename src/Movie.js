import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, rating }) {
  return (
    <div className="movie">
      <div>
        <h1 style={{backgroundColor: 'red'}} >{title} ({year})</h1>
        <h3>{rating}</h3>
        <img src={poster} title={title} alt={title}/>
        <p>{summary}</p>
        </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default Movie;
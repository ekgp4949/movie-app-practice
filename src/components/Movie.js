import React from "react";
import PropTypes from "prop-types";
import './Movie.css'
import { Link } from "react-router-dom";

function Movie({ year, title, summary, poster, rating, genres }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres } }}>
        <img className="movie__img" src={poster} title={title} alt={title}/>
        <div>
          <h1 className="movie__title">{title} ({year})</h1>
          <h3 className="movie__rating">{rating}</h3>
          <ul className="movie__genres">
            { genres.map((item, index) => <li className="movie__genre" key={index}> {item} </li>) }
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Movie.module.css'
function Movie({id, title, year, summary, poster, rating}){
    return (
        <li>
            <Link to={`/details/${id}`}>
            <div>
                <div className={style.poster} style={{backgroundImage: `url("${poster}")` }}></div>
                <div className={style.information}>
                    <h4>{title}</h4>
                    <span>*</span><small>{rating}/10</small>
                    <p>{summary}</p>
                    
                </div>
            </div>
            </Link>
        </li>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
    rating: PropTypes.number
}
export default Movie;
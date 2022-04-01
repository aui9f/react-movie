import  PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styles from './Movie.module.css';

function movie({id, medium_cover_image, title, summary, genres}){
    return (
                <li key={id}>
                    <div>
                        <img src={medium_cover_image}/>
                        <div className="txt">

                            <p>{title}</p>
                            <small>{summary}</small>
                        </div>
                        <button type="button">
                            <Link to={`/details/${id}`}>예매하기</Link>
                        </button>
                        {/* <small>{genres}</small> */}
                    </div>
                </li>
                
    )
}

movie.propTypes = {
    id: PropTypes.number,
    medium_cover_image: PropTypes.string.isRequired, 
    title: PropTypes.string,
    summary: PropTypes.string, 
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default movie;
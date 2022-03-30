import  PropTypes from "prop-types";
import {Link} from 'react-router-dom'
function movie({id, medium_cover_image, title, summary, genres}){
    return (
                <li key={id}>
                    <img src={medium_cover_image}/>
                    <h2>
                        <Link to={`/details/${id}`}>{title}</Link></h2>
                    <p>{summary}</p>
                    <small>{genres}</small>
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
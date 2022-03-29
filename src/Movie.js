import  PropTypes from "prop-types";

function movie({medium_cover_image, title, summary, genres}){
    return (
                <li key={movie.id}>
                    <img src={medium_cover_image}/>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                    <small>{genres}</small>
                </li>
                
    )
}

movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired, 
    title: PropTypes.string,
    summary: PropTypes.string, 
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default movie;
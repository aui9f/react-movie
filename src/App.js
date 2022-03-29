import { useEffect, useState } from "react";
import Movie from './Movie';
function App(){
  const [isLoading, setLoading] = useState(true)
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await (await fetch('https://yts.mx/api/v2/list_movies.json'))
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  
  useEffect(()=>{
    getMovies();
  }, []);
  console.log(movies)
  return (
    
    <div>
      {isLoading
      ?
       <p>Loading..</p> 
      :
      <ul>{movies.map(movie=>
        <Movie 
          key={movie.id}
          medium_cover_image={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      )}</ul>}
    </div>
  )
}

export default App
import { useEffect, useState } from "react";

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
  return (
    
    <div>
      {isLoading?<p>Loading..</p> :<ul>{movies.map(movie=><li key={movie.id}><h2>{movie.title}</h2><p>{movie.summary}</p></li>)}</ul>}
    </div>
  )
}

export default App
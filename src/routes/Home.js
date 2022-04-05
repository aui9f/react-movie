import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import style from './Home.module.css'
class Home extends Component {
  state={
    isLoading: true,
    movies: [],
  };

  getMovies = async () =>{
		const { 
			data: {
				data: {movies },
			}
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
		this.setState({movies, isLoading: false});
	}

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
       {isLoading?<p>Loading..</p> : <div><ul>
         {movies.map(movie=>{
         return <Movie 
          key={movie.id} 
          id={movie.id} 
          title={movie.title} 
          year={movie.year} 
          summary={movie.summary} 
          rating={movie.rating}
          poster={movie.medium_cover_image}/>
       })}
         </ul></div>}
      </div>
    );
  }
}
// 
export default Home;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';



// const API_KEY = "0d146bcd3f23ae8d930010fde1d5a727";
/* const EXAMPLE_KEY ="https://api.themoviedb.org/3/movie/550?api_key=0d146bcd3f23ae8d930010fde1d5a727" */
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


const Main = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = async (API) => {
    try {
      let awaitApi=await axios.get(API)
       setMovies(awaitApi.data.results)
      
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} {...movie}/>
        ))}
      </div>

    </>
  )
}

export default Main
 import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';
import { toastWarnNotify } from "../helpers/ToastNotify";



// const API_KEY = "0d146bcd3f23ae8d930010fde1d5a727";
/* const EXAMPLE_KEY ="https://api.themoviedb.org/3/movie/550?api_key=0d146bcd3f23ae8d930010fde1d5a727" */
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;





const Main = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const {currentUser} = useContext(AuthContext)

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

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(currentUser && searchTerm) {
      getMovies(SEARCH_API + searchTerm)
    }else if(!currentUser) {
      /* alert("Please login to search for movies") */
     toastWarnNotify("Please log in to search a movie");
    }else {
      /* alert("Please enter a search term") */
     toastWarnNotify("Please enter a text");
    }



  }

 return (
    <>
      <form className="search" onSubmit={handleSubmit} >
        <input className="search-input" type="search "  placeholder="Search a movie..."
        onChange = { (e) =>setSearchTerm(e.target.value) }
        value = {searchTerm}
        />
        <button type="submit" >Search</button>
      </form>


    
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} {...movie}/>
        ))}
      </div>

    </>
  )
} 

export default Main 
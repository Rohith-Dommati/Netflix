import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios';
import YouTube from 'react-youtube';


const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargeRow}) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
      async function fetchData(){
        const request= await axios.get(fetchURL);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },[fetchURL]);  
    // console.table(movies);
    const opts={
      height: "390",
      width: "100%",
      playerVars:{
        // https://developers.google.com/youtube/player_parameters
        autoplay:1,
      }
    }
    
    const handleClick = async (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        let trailerurl = await axios.get(
          `/movie/${movie.id}/videos?api_key=20da8952e9d4991a43f41a6c3cf8777e`
        );
      
        setTrailerUrl(trailerurl.data.results[0]?.key);

      }
    };

  return (
    <div className='row'>
        <h2 >{title}</h2>
        <div className='row_posters'>
          {
            movies.map(movie => <img key={movie.id} onClick={() =>{handleClick(movie)}} className={`row_poster ${isLargeRow && "row_posterLarge"}`}  src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />)
          }
        </div>
        {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;

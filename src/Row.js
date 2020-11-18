import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_img_url = "https://image.tmdb.org/t/p/original"
const Row = ({ title,fetchReq,larger_row }) => {
    const [movies, setMovie] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    useEffect(()=>{
        async function fetchdatat(){
            const requist = await axios.get(fetchReq);
            setMovie(requist.data.results)
        }
        fetchdatat()
    },[fetchReq]);
    const opts = {
        height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
       }
    }
    const handleClick = (movie)=>{
        if(trailerURL){
            setTrailerURL("");
        }else{
            movieTrailer(`${movie?.name || ""}`).then((url)=>{
                const urlPrms = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlPrms.get("v"))
                console.log(url)
            }).catch((error)=>console.log(error))
        }
    }
    
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map((movie)=>{
                    return <img  key={movie} 
                    onClick={()=>handleClick(movie)} 
                    src={`${base_img_url}${larger_row? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} className={`row_poster ${larger_row && "l_size"}`} />
                })}
            </div>
            { trailerURL &&  <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    );
};

export default Row;

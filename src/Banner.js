import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requists from './requists';


const Banner = () => {
    const [movie,setmovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const requist = await axios.get(requists.netflixOriginal);
            setmovie(requist.data.results[Math.floor(Math.random()*requist.data.results.length - 1)])
            return requist
        }
        fetchData()
    },[]);
    function trancate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "...":str
    }
    return (
        <header className="banner"
          style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
              backgroundPosition: "center center"
          }}
        >
            <div className="banner_content">
                <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h2 className="banner_discription">
                    {trancate(movie?.overview,150)}
                </h2>
            </div>
            <div className="banner_bottom"/>
        </header>
    );
};

export default Banner;
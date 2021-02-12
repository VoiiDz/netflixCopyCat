import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.getTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, [])


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"

            }}
        >
            <div className="banner-contents">
                {/* title */}
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div > 2 buttons */}
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                {/* desciption */}
                <h1 className="banner-desc">
                    {movie?.overview}
                </h1>
            </div>
            
        </header>
    )
}

export default Banner

import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.getTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]);
        }
    }, [])

    return (
        <header>
            {/* title */}

            {/* div > 2 buttons */}

            {/* desciption */}
        </header>
    )
}

export default Banner

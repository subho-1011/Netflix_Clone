import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    console.table(movies);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailUrl) {
            setTrailerUrl('');
        } else {
            // movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            //     .then(url => {
            //         const urlParams = new URLSearchParams(new URL(url).search);
            //          setTrailerUrl(urlParams.get('v'));
            //     })
            //     .catch(error => console.log(error));
            movieTrailer(null, { tmdbId: movie.id })
                .then((url) => {
                    console.log("url is " + url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("urlParamsn" + urlParams);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }

    }



    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            {/* container -> posters */}
            <div className='row_posters'>
                {movies.length > 0 && movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt='{movies.name}'
                    />
                ))}
            </div>


            {trailUrl && <YouTube videoId={trailUrl} opts={opts} />}

        </div>
    );
}

export default Row

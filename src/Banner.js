import React, {useState, useEffect} from 'react';
import myaxios from "./myaxios";
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original"

export default function Row({fetchUrl}) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await myaxios.get(fetchUrl);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
            );
            // Math.floor(Math.random() * request.data.results.length -1)
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    return (
        <div className="test">
        <header className="banner"
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,}}>
            <span className="banner-movie-info">
                <span className="banner-movie-name">{movie.name}</span>
                <span className="buttons-span">
                <button className="banner-button1">Play</button>
                <button className="banner-button2">Trailer</button>
                </span>
                <span className="banner-desc">{movie.overview}</span>

            </span>




        </header>
        </div>
    );
};

// {`row-posters-poster ${isLargeRow && "row-posters-posterL"}`}

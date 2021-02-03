import React, {useState, useEffect} from 'react';
import myaxios from "./myaxios";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"

export default function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        async function fetchData(){
            const request = await myaxios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    },[fetchUrl])

    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <span className="test">

                        <img className={isLargeRow ? "row-posters-posterL" : "row-posters-poster"} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                        <p className={isLargeRow ? "test1L" : "test1"}>{movie.name || movie.original_name || movie.title}</p>

                        </span>
                ))}
            </div>

            {/*conteiner -> posters*/}
        </div>
    );
};

// {`row-posters-poster ${isLargeRow && "row-posters-posterL"}`}

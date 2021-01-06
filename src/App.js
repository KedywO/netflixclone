import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import React, {useEffect, useState} from "react";
import Nav from "./Nav";




function App() {

  return (
    <div className="App">
        <Nav />
        <Banner fetchUrl={requests.fetchNetflixOriginals}/>

        <Row title="Netflix originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}
export default App;

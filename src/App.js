import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />

      {/* MovieList */}
      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /> */}
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Amimation" fetchUrl={requests.fetchAnimation} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horrror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="MyStery" fetchUrl={requests.fetchMystery} />
      <Row title="TV Show" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;

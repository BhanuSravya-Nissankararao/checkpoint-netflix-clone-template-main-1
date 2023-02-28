import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./request";
function App(){
    return(
        // <>
        // <h1>Netflix Clone</h1>
        // </>
        <div className="App">
          <Navbar />
          <Banner />
            <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            
            <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
            
            <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
            
            <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
            
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        </div>
    );
}
export default App;

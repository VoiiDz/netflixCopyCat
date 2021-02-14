import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* NavBar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.getNetflixOri}
        isLargeRow
       />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
    </div>
  );
}

export default App;

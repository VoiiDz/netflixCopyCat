import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.getNetflixOri} />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getHorrorMovies} />
    </div>
  );
}

export default App;

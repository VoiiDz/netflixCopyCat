import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.getNetflixOri} />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
    </div>
  );
}

export default App;

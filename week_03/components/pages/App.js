import { movies } from "../Movies/MovieDummy";
import Movie from "../Movies/Movie";

function App() {
  return (
    <div className="App">1
      <div className="app-container">
        {movies.results.slice(0, 1).map((item) => {
          return <Movie movie={item} />;
        })}
      </div>
    </div>
  );
}

export default App;


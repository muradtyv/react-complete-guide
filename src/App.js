import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchFunction = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch("https://swapi.dev/api/films/");

  //     if (!response.ok) {
  //       throw new Error("Somtehing went wrong!!!");
  //     }
  //     const data = await response.json();

  //     const transformedMovies = data.results.map((movie) => {
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         openingText: movie.opening_crawl,
  //         releaseDate: movie.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, [])
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-201e1-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
    

      const loadedMovies = [];

      for (const key in data) {
        console.log(key)
        console.log(data[key])
        loadedMovies.push( {
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  
  useEffect( () => {
    fetchMoviesHandler()
  } ,[fetchMoviesHandler])

  async function addMovieHandler(movie) {
   const response = await fetch("https://react-http-201e1-default-rtdb.firebaseio.com/movies.json", {
      method: "post",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    console.log(data)

  }

  let content = <p>Not Found</p>

  if(movies.length > 0) {
    content  = <MovieList movies = {movies} />
  }

  if(error) {
    content = <p>{error}</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>
  }

  // useEffect(() => {
  //   fetchFunction();
  // }, [])

  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Not Found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

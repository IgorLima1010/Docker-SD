import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import ResultForm from "./ResultForm";
import MovieList from "./MovieList";
import api from "../services/api";
import "./App.css";

function App() {
  const moviesEndpoint = "/movies";
  const seriesEndpoint = "/series";
  const doisEndpoint = "/nosdois";
  const [searchResult, setSearchResult] = useState("");
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  const fetchMovies = async () => {
    try {
      const { data } = await api.get(moviesEndpoint);
      setMovies(data);
    } catch (error) {
      setError("Could not fetch the movies!");
    }
  };

  const fetchSeries = async () => {
    try {
      const { data } = await api.get(seriesEndpoint);
      setSeries(data);
    } catch (error) {
      setError("Could not fetch the movies!");
    }
  };

  const handleAddMovie = async (title) => {
    try {
      const movie = { _id: Date.now(), title };
      setMovies([...movies, movie]);

      const { data: savedMovie } = await api.create(moviesEndpoint, movie);

      setMovies([...movies, savedMovie]);
    } catch (error) {
      setError("Could not save the movie!");
      setMovies(movies);
    }
  };

  const handleAddSeries = async (title) => {
    try {
      const serie = { _id: Date.now(), title };
      setSeries([...series, serie]);

      const { data: savedSerie } = await api.create(seriesEndpoint, serie);

      setSeries([...movies, savedSerie]);
    } catch (error) {
      setError("Could not save the movie!");
      setSeries(series);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      setMovies(movie.filter((m) => m !== movie));
      await api.remove(moviesEndpoint + "/" + movie._id);
    } catch (error) {
      setError("Could not delete the horror movie!");
      setMovies(movie);
    }
  };

  const handleDeleteSeries = async (serie) => {
    try {
      setSeries(serie.filter((s) => s !== serie));
      await api.remove(seriesEndpoint + "/" + serie._id);
    } catch (error) {
      setError("Could not delete the action movie!!");
      setSeries(serie);
    }
  };


  const titleSearch = async (title) => {
    if (title === ""){
      setSearchResult({
        movie: null,
        serie: null
      });
      return;
    }
    try {
      const { data } = await api.get(doisEndpoint+"/"+title);
      setSearchResult(data);
    } catch (error) {
      console.log("Could not search movies!");
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <div className="App">
      <h1>Busque um filme ou série</h1>
      <ResultForm onSearchTitle={titleSearch} searchResult={searchResult} />
      {error && (
        <p role="alert" className="Error">
          {error}
        </p>
      )}
      <h1>Insira um filme</h1>
      <MovieForm onAddMovie={handleAddMovie} placeholder="Add a film" className="inline-block" />
      {error && (
        <p role="alert" className="Error">
          {error}
        </p>
      )}
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} type="HorrorItem" className="inline-block" />
      <h1>Insira uma série</h1>
      <MovieForm onAddMovie={handleAddSeries} placeholder="Add a film" className="inline-block" />
      {error && (
        <p role="alert" className="Error">
          {error}
        </p>
      )}
      <MovieList movies={series} onDeleteMovie={handleDeleteSeries} type="ActionItem" className="inline-block" />
    </div>
  );
  
}

export default App;

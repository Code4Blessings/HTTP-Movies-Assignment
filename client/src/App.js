import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import axios from "axios";
import "./App.css";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect((id) => {
     axios
      .get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data ))
      .catch(err => console.log(err.response));
  }, [])

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
      path="/update-movie/:id" 
      render={props => (
        <UpdateMovie {...props} movies={movies} updateMovies={setMovies} />
      )} />
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const UpdateMovie = (props) => {
    const initialMovie = {
        title: '',
        director: '',
        metascore: '',
        stars: []
    }

    const [movie, setMovie] = useState(initialMovie);
    
    useEffect(() => {
        const movieToEdit = props.movies.find(
            e => `${e.id}` === props.match.params.id
        );
        console.log(props.movies, movieToEdit);
        if (movieToEdit) {
            setMovie(movieToEdit)
        }
    }, [props.movies, props.match.params.id])

    const changeHandler = e => {
        setMovie({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
          <h2>Update Movie</h2>  
          <form>
            <input 
            type="text"
            name="title"
            placeholder="title of movie" 
            onChange={changeHandler} 
            value={movie.title} />

            <input 
            type="text"
            name="director"
            placeholder="director" 
            onChange={changeHandler} 
            value={movie.director} />

            <input 
            type="text"
            name="metascore"
            placeholder="metascore" 
            onChange={changeHandler} 
            value={movie.metascore} />

            <input 
            type="text"
            name="stars"
            placeholder="name of stars" 
            onChange={changeHandler} 
            value={movie.stars} />
          </form>
        </div>
    );
};

export default UpdateMovie;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {
    const initialMovie = {
        //id: '',
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
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            console.log('Put request',res.data)
            props.updateMovies([...props.movies,
                res.data])
            props.history.push('/');
        })
        
        .catch(err => console.log('Data returned an error', err));
    }

    return (
        <div>
          <h2>Update Movie</h2>  
          <form onSubmit={submitHandler} >
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
            <button>Update Movie</button>
          </form>
          {console.log(`Bottom of form ${props.movies}`)}
        </div>
    );
};

export default UpdateMovie;
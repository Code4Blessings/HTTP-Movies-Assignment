import React, { useState } from 'react';

const UpdateMovie = () => {
    const initialMovie = {
        title: '',
        director: '',
        metascore: '',
        stars: []
    }

    const [movie, setMovie] = useState(initialMovie);

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
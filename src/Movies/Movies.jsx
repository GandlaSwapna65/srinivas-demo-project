
import React from 'react';
import Movie from '../Movie/Movie.jsx';
import movies from './movies.js';
import './style.css';

class Movies extends React.Component {
    state = { ...Movies };

    getMovie = movie => {
        return (
            <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
        );
    };



    de
    render() {

        return (

            < div>
                {
                    Object.keys(this.state).map(x => {
                        console.log(x);
                    })
                }

            </div >


        );

    }
}
export default Movies;
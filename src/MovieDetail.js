import React, { Component } from 'react';
import { MOVIE_BASE_PATH, MOVIE_API } from './api';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	state = {
		movie: {}
	}

	async componentDidMount() {
		try {
			const res = await fetch(`${MOVIE_BASE_PATH}movie/${this.props.match.params.id}?${MOVIE_API}&language=en-US`);
			const movie = await res.json();
			console.log(movie);
			this.setState({
				movie
			})
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const {movie} = this.state;
		return (
			<div>
				<img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
				<img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
				<h2>{movie.title}</h2>
				<h1>{movie.title}</h1>
				<h3>{movie.release_date}</h3>
				<p>{movie.overview}</p>
			</div>
		);
	}
}

export default MovieDetail;
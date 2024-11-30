import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchGenres, fetchMovies } from '../api/tmdbApi';
import Loader from './Loader';
import './Movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMoviesByGenre = async () => {
      setLoading(true);
      try {
        const genresData = await fetchGenres();
        setGenres(genresData);

        const moviesData = {};
        for (const genre of genresData) {
          const movies = await fetchMovies({ genreId: genre.id, page: 1 });
          moviesData[genre.name] = movies.results;
        }
        setMoviesByGenre(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      setLoading(false);
    };

    loadMoviesByGenre();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="movies-container">
      {genres.map((genre) => (
        <div key={genre.id} className="genre-section">
          {/* Genre Title */}
          <h4 className="genre-title">{genre.name} <span>&rarr;</span></h4>
          <div className="movies-row">
            {moviesByGenre[genre.name]?.map((movie) => (
              <Link to={`/player/${movie.id}`} key={movie.id} className="movie-card-link">
                <div className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <div className="movie-info">
                    <h6 className="movie-title text-truncate">{movie.title}</h6>
                    <p className="movie-release-date">{new Date(movie.release_date).getFullYear()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;

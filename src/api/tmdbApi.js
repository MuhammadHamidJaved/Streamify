import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

// Fetch movies with filters
export const fetchMovies = async ({
  page = 1,
  genreId = null,
  language = 'en-US'
}) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: apiKey,
        language,
        page,
        with_genres: genreId,
        sort_by: 'popularity.desc',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

// Fetch genres list
export const fetchGenres = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

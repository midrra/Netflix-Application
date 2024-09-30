const APi_KEY = "88170d99a195633ba877280a25be1735";

const requests = {
  fetchTrending: `trending/all/day?api_key=${APi_KEY}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${APi_KEY}&language=en-US`, //Not allowed
  fetchTopRated: `/movie/top_rated?api_key=${APi_KEY}&language=en-US&page=1`, //Not allowed
  fetchActionMovies: `/movie/28?api_key=${APi_KEY}&language=en-US`,
  fetchComedyMovies: `/movie/35?api_key=${APi_KEY}&language=en-US`,
  fetchHorrorMovies: `/movie/27?api_key=${APi_KEY}&language=en-US`,
  fetchRomanceMovies: `/movie/10749?api_key=${APi_KEY}&language=en-US`,
  fetchDocumentaries: `/movie/99?api_key=${APi_KEY}&language=en-US`,
  test: `/discover/movie?api_key=${APi_KEY}&With_genres=10749`,
};

export default requests;

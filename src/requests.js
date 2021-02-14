const APIKEY = "bc692cd391a5bfed9f97125c62584f92";

const requests = {
    getTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
    getNetflixOri: `/discover/movie?api_key=${APIKEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    getActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    getHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    getRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    getMovieVideo: (MovieID) => `https://api.themoviedb.org/3/movie/${MovieID}/videos?api_key=${APIKEY}&language=en-US`
}

export default requests;
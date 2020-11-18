const API_key ="3f392cf95b3ed725711f2a2782dc5499";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_key}`,
    netflixOriginal:`/discover/tv?api_key=${API_key}&with_network=213`,
    fetchToprated:`/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    actionMovie:`/discover/movie?api_key=${API_key}&with_genres=28`,
    comideyMovie:`/discover/movie?api_key=${API_key}&with_genres=35`,
    horrorMovie:`/discover/movie?api_key=${API_key}&with_genres=27`,
    romanceMovie:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    documantary:`/discover/movie?api_key=${API_key}&with_genres=99`,
}

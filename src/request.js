const API_KEY ='3ae80dce9e5ae348e3c45695d46576cd';
/**
 * const requests ={
 fetchingHarry: `/?apikey=${API_KEY}=harry%20potter`,
 fetchingLord:`/?apikey=${API_KEY}=lord%20of%20the%20ring`,
 fetchingBatman:`/?apikey=${API_KEY}=Batman`,
}
 */
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   }

export default requests;
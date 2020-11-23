import axios from 'axios';

/** base url to make a request to the movie database */
/*
const instance = 
axios.create({
 baseURL :"http://www.omdbapi.com"
})*/

const instance = 
axios.create({
 baseURL :"https://api.themoviedb.org/3"
})

export default instance;
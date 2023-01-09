const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_KEY = "f9acad7a4b064909be30cfd5e0064bf4";

// we have get, post, put, delete methods.
// use get here because we want to receive data.
// home page是在angular里面直接render的，oh死后nirmal说不需要写"/"的route
app.get('/trendingMovies', function(req, res) { // request object is from client to server
	axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = {};
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				movie = {};
				movie["id"] = results[i]["id"];
				movie["title"] = results[i]["title"];
				movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
				re[i.toString()] = movie;
			}
			res.send(re);// can also use res.json(re)
		})
	.catch(error => {
		console.log(error)
	})
})

module.exports = router;
//server.js
var express = require('express');
const cors = require('cors');
// const watchMovie = require('./routes/watch/movie/:id');
var app = express();
app.use(cors());

const API_KEY = "f9acad7a4b064909be30cfd5e0064bf4";
const axios = require('axios');
const { query } = require('express');

// app.use('/apis/trendingMovies', watchMovie);



// we have get, post, put, delete methods.
// use get here because we want to receive data.
// home page是在angular里面直接render的，oh死后nirmal说不需要写"/"的route

app.get('/', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
	.then(
		response => {// measn the input is the response
// 			// console.log(response.data.results)
// 			var results = response.data.results;
// 			var re = {};
// 			var l = Math.min(results.length, 24);
// 			for (var i = 0; i < l; i++){
// 				movie = {};
// 				movie["id"] = results[i]["id"];
// 				movie["title"] = results[i]["title"];
// 				movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
// 				re[i.toString()] = movie;
// 			}
			res.json(response.data.results);
		}
		)
	.catch(error => {
		console.log(error)
	})
})

// var posts = require('./routes/posts');

// app.get('/anotherPage', function(req, res) { 
// 	const id = req.query.id // when go to page like localhost:8080/aline?id=20
//     res.send('Hello World'); 
// })



// API call从21页开始的部分

// Currently playing Movies Endpoint, only 5  4.1.4
app.get('/currentPlayingMovies', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    const promise = axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY + "&language=en- US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 5);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["backdrop_path"])!=="undefined" && results[i]["backdrop_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["backdrop_path"] = "https://image.tmdb.org/t/p/w780" + results[i]["backdrop_path"];
					re.push(movie);
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Popular Movies Endpoint 4.1.5
app.get('/popularMovies', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    const promise = axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en- US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})


// Top-Rated Movies Endpoint 4.1.3
app.get('/topRatedMovies', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    const promise = axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Trending Movies Endpoint 4.1.2
app.get('/trendingMovies', function(req, res) { // request object is from client to server
	const promise = axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Recommended Movies Endpoint  4.1.6
app.get('/recommendedMovies/:id', function(req, res) { // request object is from client to server
    const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})
// Similar Movies Endpoint  4.1.7
app.get('/similarMovies/:id', function(req, res) { // request object is from client to server
    const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["title"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// get movie details 4.1.9
app.get('/movieDetails/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data;// .results
			movie = {};
			movie["media_type"] = "movie";
			movie["id"] = results["id"];
			movie["title"] = results["title"];
			var genreL = results["genres"].length;
			var genreArr = new Array();
			for( var i=0; i<genreL; i++){
				genreArr.push(results["genres"][i]["name"]);
			}
			var genres = genreArr.join(", ");
			movie["genres"] = genres;
			var langL = results["spoken_languages"].length;
			var langArr = new Array();
			for( var i=0; i<langL; i++){
				langArr.push(results["spoken_languages"][i]["english_name"]);
			}
			var lang = langArr.join(", ");
			movie["spoken_languages"] = lang;
			movie["release_date"] = results["release_date"];
			movie["release_year"] = results["release_date"].substring(0, 4);
			var hour = Math.floor(results["runtime"]/60);
			var minute = results["runtime"]%60;
			// if(hour<=1){
			// 	movie["runtime"] = hour + "hr " + minute+ "mins";
			// }
			// else{
			// 	movie["runtime"] = hour + "hrs " + minute+ "mins";
			// }
			movie["runtime"] = hour + "hrs " + minute+ "mins";
			movie["overview"] = results["overview"];
			movie["vote_average"] = results["vote_average"];
			movie["tagline"] = results["tagline"];
			// encode the text for Twitter, and return the url for the video in /movieVideo/:id
			movie["twitterText"] = "https://twitter.com/intent/tweet?text=Watch";
			movie["twitterText"] += encodeURIComponent(" " +results["title"]);
			if(typeof results["poster_path"] !== "undefined" && results["poster_path"] !== null){
				movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results["poster_path"];
			}
			console.log(movie);
			res.json(movie);
		
		})
	.catch(error => {
		console.log(error)
	})
})

// 4.1.8
app.get('/movieVideo/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;// a list
			movieVideo = {};
			cnt = 0;
			for( var i=0; i<results.length; i++){
				if(typeof results[i]["key"] != "undefined"){
					movieVideo["site"] = results[i]["site"];
					movieVideo["type"] = results[i]["type"];
					movieVideo["name"] = results[i]["name"];
					movieVideo["key"] = results[i]["key"]; // "https://www.youtube.com/watch?v=" + results[i]["key"]
					movieVideo["twitterURL"] = encodeURIComponent(" https://www.youtube.com/watch?v="+results[i]["key"] + " #USC #CSCI571 #FightOn");
					movieVideo["FBURL"] = encodeURIComponent("https://www.youtube.com/watch?v="+results[i]["key"]);
					// console.log(movieVideo["twitterURL"]);
					cnt+=1;
					break;
				}
			}
			// console.log("out for.");
			// console.log(typeof(movieVideo));
			// console.log(movieVideo.length);
			if(cnt==0){
				// console.log("in the if movieVideo!!!")
				movieVideo["site"] = "YouTube";
				movieVideo["type"] = "Trailer";
				movieVideo["name"] = "Substitue Video";
				movieVideo["key"] = "tzkWB85ULJY"; // "https://www.youtube.com/watch?v=" + results[i]["key"]
				movieVideo["twitterURL"] = encodeURIComponent(" https://www.youtube.com/watch?v="+"tzkWB85ULJY" + " #USC #CSCI571 #FightOn");
				movieVideo["FBURL"] = encodeURIComponent("https://www.youtube.com/watch?v="+"tzkWB85ULJY");
			}
			res.json(movieVideo);
		})
	.catch(error => {
		console.log(error)
	})
})

//4.1.11
app.get('/movieCast/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.cast;// a list
			var re = new Array();
			for( var i=0; i<results.length; i++){
				if(typeof results[i]["profile_path"] === "undefined" || results[i]["profile_path"] === null){
					continue;
				}
				cast = {};
				cast["id"] = results[i]["id"];
				cast["name"] = results[i]["name"];
				cast["character"] = results[i]["character"];
				cast["profile_path"] = "https://image.tmdb.org/t/p/w500/" + results[i]["profile_path"];
				re.push(cast);
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})
//4.1.10
app.get('/movieReview/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;// a list
			var l = Math.min(results.length, 10); //  at most return 10 reviews
			var re = new Array();
			for( var i=0; i<l; i++){
				review = {};
				review["author"] = results[i]["author"];
				review["content"] = results[i]["content"];
				var y = results[i]["created_at"].substring(0, 4); // year
				var m = results[i]["created_at"].substring(5, 7); // month
				var d = results[i]["created_at"].substring(8, 10); // day
				var h = results[i]["created_at"].substring(11, 13); // hour
				var min_sec = results[i]["created_at"].substring(14, 19); // min and second
				review["created_at"] = generateTime(y, m, d, h, min_sec);
				review["url"] = results[i]["url"];
				//rating
				if (typeof results[i]["author_details"]["rating"] === "undefined"){
					review["rating"] = 0;
				}
				else if (results[i]["author_details"]["rating"] === null){
					review["rating"] = 0;
				}
				else{
					review["rating"] = results[i]["author_details"]["rating"];
				}
				// avatar_path
				if (typeof results[i]["author_details"]["avatar_path"] === "undefined"){
					review["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				}
				else if (results[i]["author_details"]["avatar_path"] === null){
					review["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				}
				else{
					if(results[i]["author_details"]["avatar_path"].substring(0, 9)=="/https://"){
						review["avatar_path"] = results[i]["author_details"]["avatar_path"].substring(1);
					}
					else{
						review["avatar_path"] = "https://image.tmdb.org/t/p/original" + results[i]["author_details"]["avatar_path"];
					}
					
				}
				re.push(review);
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})


// to generate the create_time for movieReview.
function generateTime(y, m, d, h, min_sec){
	var re = "";
	// month
	if(m == "01"){
		re+="January ";
	}
	else if (m=="02"){
		re+="February ";
	}
	else if (m=="03"){
		re+="March ";
	}
	else if (m=="04"){
		re+="April ";
	}
	else if (m=="05"){
		re+="May ";
	}
	else if (m=="06"){
		re+="June ";
	}
	else if (m=="07"){
		re+="July ";
	}
	else if (m=="08"){
		re+="August ";
	}
	else if (m=="09"){
		re+="September ";
	}
	else if (m=="10"){
		re+="October ";
	}
	else if (m=="11"){
		re+="November ";
	}
	else if (m=="12"){
		re+="December ";
	}
	// day, year
	re+=d + ", " + y + ", ";
	// hour
	var hour_int = parseInt(h);
	if(hour_int<12){
		re += h + ":" + min_sec + " " + "AM";
	}
	else if( hour_int ==12){
		re += h + ":" + min_sec + " " + "PM";
	}
	else{
		re += (hour_int-12).toString() + ":" + min_sec + " " + "PM";
	}
	return re;
}



// Cast Detail  4.1.21
app.get('/castDetail/:id', function(req, res) { // request object is from client to server
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/person/" + id + "?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data;
			c = {};
			if(typeof results["birthday"] !== "undefined" && results["birthday"] !== null){
				c["birthday"] = results["birthday"];
			}
			else{
				c["birthday"] = "";
			}

			if(typeof results["birthPlace"] !== "undefined" && results["birthPlace"] !== null){
				c["birthPlace"] = results["place_of_birth"];
			}
			else{
				c["birthPlace"] = "";
			}

			if(results["gender"] == 1){
				c["gender"] = "Female";
			}
			else if(results["gender"] == 2){
				c["gender"] = "Male";
			}
			else{
				c["gender"] = ""; // undefined
			}

			if(typeof results["name"] !== "undefined" && results["name"] !== null){
				c["name"] = results["name"];
			}
			else{
				c["name"] = "";
			}

			if(typeof results["homepage"] !== "undefined" && results["homepage"] !== null){
				c["homepage"] = results["homepage"];
			}
			else{
				c["homepage"] = "";
			}

			if(typeof results["also_known_as"] !== "undefined" && results["also_known_as"] !== null){
				c["alsoKnownAs"] = results["also_known_as"].join(", ");
			}
			else{
				c["alsoKnownAs"] = "";
			}

			if(typeof results["known_for_department"] !== "undefined" && results["known_for_department"] !== null){
				c["knownFor"] = results["known_for_department"];// known for department - talents
			}
			else{
				c["knownFor"] = "";
			}

			if(typeof results["biography"] !== "undefined" && results["biography"] !== null){
				c["biography"] = results["biography"];
			}
			else{
				c["biography"] = "";
			}

			res.json(c);
		})
	.catch(error => {
		console.log(error)
	})
})

// Cast External Ids 4.1.22
app.get('/castExternalId/:id', function(req, res) { // request object is from client to server
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/person/" + id + "/external_ids?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data;
			c = {};
			if(results["imdb_id"]!=null){
				c["imdb_id"] = "https://imdb.com/name/" + results["imdb_id"];
			}
			else{
				c["imdb_id"] = ""; // send back "" if doesn't exist.
			}
			
			if(results["facebook_id"]!=null){
				c["facebook_id"] = "https://facebook.com/" + results["facebook_id"];
			}
			else{
				c["facebook_id"] = "";
			}
			if(results["Instagram_id"]!=null){
				c["instagram_id"] = "https://instagram.com/" + results["instagram_id"];
			}
			else{
				c["instagram_id"] = "";
			}
			if(results["Twitter_id"]!=null){
				c["twitter_id"] = "https://twitter.com/" + results["twitter_id"];
			}
			else{
				c["twitter_id"] = "";
			}
			res.json(c);
		})
	.catch(error => {
		console.log(error)
	})
})







// TV

// Trending TVs Endpoint 4.1.12
app.get('/trendingTVs', function(req, res) { // request object is from client to server
	const promise = axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=" + API_KEY)
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof results[i]["poster_path"] !== "undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["name"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Top-Rated TVs Endpoint 4.1.13
app.get('/topRatedTVs', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    const promise = axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["name"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Popular TVs Endpoint 4.1.14
app.get('/popularTVs', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
    const promise = axios.get("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["name"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// Recommended Movies Endpoint  4.1.15
app.get('/recommendedTVs/:id', function(req, res) { // request object is from client to server
    const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["name"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})
// Similar Movies Endpoint  4.1.16
app.get('/similarTVs/:id', function(req, res) { // request object is from client to server
    const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "/similar?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			var results = response.data.results;
			var re = new Array();
			var l = Math.min(results.length, 24);
			for (var i = 0; i < l; i++){
				if(typeof(results[i]["poster_path"])!=="undefined" && results[i]["poster_path"] !== null){
					movie = {};
					movie["id"] = results[i]["id"];
					movie["title"] = results[i]["name"];
					movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
					re.push(movie);
				}
			}
			res.send(re);
		})
	.catch(error => {
		console.log(error)
	})
})

// 4.1.17
app.get('/tvVideo/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;// a list
			cnt = 0;
			movieVideo = {};
			for( var i=0; i<results.length; i++){
				if(typeof results[i]["key"] != "undefined"){
					movieVideo["site"] = results[i]["site"];
					movieVideo["type"] = results[i]["type"];
					movieVideo["name"] = results[i]["name"];
					movieVideo["key"] = results[i]["key"]; // "https://www.youtube.com/watch?v=" + results[i]["key"]
					movieVideo["twitterURL"] = encodeURIComponent(" https://www.youtube.com/watch?v="+results[i]["key"] + " #USC #CSCI571 #FightOn");
					movieVideo["FBURL"] = encodeURIComponent("https://www.youtube.com/watch?v="+results[i]["key"]);
					// console.log(movieVideo["twitterURL"]);
					cnt+=1;
					break;
				}
			}
			if(cnt==0){
				// console.log("in the if movieVideo!!!")
				movieVideo["site"] = "YouTube";
				movieVideo["type"] = "Trailer";
				movieVideo["name"] = "Substitue Video";
				movieVideo["key"] = "tzkWB85ULJY"; // "https://www.youtube.com/watch?v=" + results[i]["key"]
				movieVideo["twitterURL"] = encodeURIComponent(" https://www.youtube.com/watch?v="+"tzkWB85ULJY" + " #USC #CSCI571 #FightOn");
				movieVideo["FBURL"] = encodeURIComponent("https://www.youtube.com/watch?v="+"tzkWB85ULJY");
			}
			res.json(movieVideo);
			res.json(movieVideo);
		})
	.catch(error => {
		console.log(error)
	})
})

// get TV details 4.1.18
app.get('/tvDetails/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data;// .results
			movie = {};
			movie["media_type"] = "tv";
			movie["id"] = results["id"];
			movie["title"] = results["name"];
			var genreL = results["genres"].length;
			var genreArr = new Array();
			for( var i=0; i<genreL; i++){
				genreArr.push(results["genres"][i]["name"]);
			}
			var genres = genreArr.join(", ");
			movie["genres"] = genres;
	
			var langL = results["spoken_languages"].length;
			var langArr = new Array();
			for( var i=0; i<langL; i++){
				langArr.push(results["spoken_languages"][i]["english_name"]);
			}
			var lang = langArr.join(", ");
			movie["spoken_languages"] = lang;
			// movie["spoken_languages"] = results["languages"].join(", "); // results["languages"] is already an array
			
			if(typeof(results["first_air_date"])!=="undefined" || results["first_air_date"]!==null){
				movie["release_date"] = results["first_air_date"];
				movie["release_year"] = results["first_air_date"].substring(0, 4);
			}
			else{
				movie["release_date"] = "";
				movie["release_year"] = "";
			}
			
			movie["runtime"] = results["episode_run_time"][0] + "mins"; 
			movie["overview"] = results["overview"];
			movie["vote_average"] = results["vote_average"];
			movie["tagline"] = results["tagline"];
			// encode the text for Twitter, and return the url for the video in /movieVideo/:id
			movie["twitterText"] = "https://twitter.com/intent/tweet?text=Watch";
			movie["twitterText"] += encodeURIComponent(" " +results["name"]);
			if(typeof results["poster_path"] !== "undefined" && results["poster_path"] !== null){
				movie["poster_path"] = "https://image.tmdb.org/t/p/w500" + results["poster_path"];
			}
			res.json(movie);
		})
	.catch(error => {
		console.log(error)
	})
})

//4.1.19
app.get('/tvReview/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.results;// a list
			var l = Math.min(results.length, 10); //  at most return 10 reviews
			var re = new Array();
			for( var i=0; i<l; i++){
				review = {};
				review["author"] = results[i]["author"];
				review["content"] = results[i]["content"];
				var y = results[i]["created_at"].substring(0, 4); // year
				var m = results[i]["created_at"].substring(5, 7); // month
				var d = results[i]["created_at"].substring(8, 10); // day
				var h = results[i]["created_at"].substring(11, 13); // hour
				var min_sec = results[i]["created_at"].substring(14, 19); // min and second
				review["created_at"] = generateTime(y, m, d, h, min_sec);
				review["url"] = results[i]["url"];
				//rating
				if (typeof results[i]["author_details"]["rating"] == "undefined"){
					review["rating"] = 0;
				}
				else if (results[i]["author_details"]["rating"] == null){
					review["rating"] = 0;
				}
				else{
					review["rating"] = results[i]["author_details"]["rating"];
				}
				// avatar_path
				if (typeof results[i]["author_details"]["avatar_path"] === "undefined"){
					review["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				}
				else if (results[i]["author_details"]["avatar_path"] === null){
					review["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				}
				else{
					if(results[i]["author_details"]["avatar_path"].substring(0, 9)=="/https://"){
						review["avatar_path"] = results[i]["author_details"]["avatar_path"].substring(1);
					}
					else{
						review["avatar_path"] = "https://image.tmdb.org/t/p/original" + results[i]["author_details"]["avatar_path"];
					}
					
				}
				re.push(review);
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})


//4.1.20
app.get('/tvCast/:id', function(req, res) { // request object is from client to server
    // res.send('Hello World!!'); //response has the data from server to the client.
	const id = req.params.id;
    const promise = axios.get("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=" + API_KEY + "&language=en-US&page=1")
	.then(
		response => {// measn the input is the response
			// console.log(response.data.results)
			var results = response.data.cast;// a list
			var re = new Array();
			for( var i=0; i<results.length; i++){
				if(typeof results[i]["profile_path"] === "undefined" || results[i]["profile_path"] === null){
					continue;
				}
				cast = {};
				cast["id"] = results[i]["id"];
				cast["name"] = results[i]["name"];
				cast["character"] = results[i]["character"];
				cast["profile_path"] = "https://image.tmdb.org/t/p/w500/" + results[i]["profile_path"];
				re.push(cast);
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})


// Multi Search  4.1.1
app.get('/multiSearch/:query', function(req, res) { // request object is from client to server
	const query = req.params.query;
    const promise = axios.get("https://api.themoviedb.org/3/search/multi?api_key=" + API_KEY + "&language=en-US&query=" + query)
	.then(
		response => {
			var results = response.data.results;
			var cnt = 0;
			re = new Array();
			for( var i=0; i<results.length; i++){ // collect at most 7 results.
				if(typeof results[i]["backdrop_path"] === "undefined" || results[i]["backdrop_path"] === null){
					continue;
				}
				else{
					if(results[i]["media_type"] == "movie"){
						c = {};
						c["id"] = results[i]["id"];
						c["title"] = results[i]["title"];
						c["backdrop_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["backdrop_path"]
						c["media_type"] = results[i]["media_type"];
						re.push(c);
						cnt +=1;
					}
					else if(results[i]["media_type"] == "tv"){
						c = {};
						c["id"] = results[i]["id"];
						c["title"] = results[i]["name"];
						c["backdrop_path"] = "https://image.tmdb.org/t/p/w500" + results[i]["backdrop_path"]
						c["media_type"] = results[i]["media_type"];
						re.push(c);
						cnt+=1;
					}
					if(cnt >=7){
						break;
					}
				}
			}
			res.json(re);
		})
	.catch(error => {
		console.log(error)
	})
})


var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})





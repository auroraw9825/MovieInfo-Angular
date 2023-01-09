import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
  
  // for currently playing watching
  getAllPosts(){
    let url = "http://localhost:8080/currentPlayingMovies";
    return this.httpClient.get(url); // return the response
  }
  
  // for popular movies, trending movies, top rated movies.
  getPopularMovies(){
    let url = "http://localhost:8080/popularMovies";
    return this.httpClient.get(url); // return the response
  }
  getTrendingMovies(){
    let url = "http://localhost:8080/trendingMovies/";
    return this.httpClient.get(url); // return the response
  }
  getTopRatedMovies(){
    let url = "http://localhost:8080/topRatedMovies/";
    return this.httpClient.get(url); // return the response
  }

  getMovieDetails(id: string){
    let url = "http://localhost:8080/movieDetails/" + id;
    return this.httpClient.get(url); // return the response
  }

  getMovieVideo(id: string){
    let url = "http://localhost:8080/movieVideo/" + id;
    return this.httpClient.get(url); // return the response
  }

  getMovieCast(id: string){
    let url = "http://localhost:8080/movieCast/" + id;
    return this.httpClient.get(url); // return the response
  }

  getMovieReview(id: string){
    let url = "http://localhost:8080/movieReview/" + id;
    return this.httpClient.get(url); // return the response
  }

  getCastDetail(person_id: string){
    let url = "http://localhost:8080/castDetail/" + person_id;
    return this.httpClient.get(url);
  }

  getCastDExternalID(person_id: string){
    let url = "http://localhost:8080/castExternalId/" + person_id;
    return this.httpClient.get(url);
  }

  getRecommendedMovies(id: string){
    let url = "http://localhost:8080/recommendedMovies/" + id;
    return this.httpClient.get(url); // return the response
  }
  getSimilarMovies(id: string){
    let url = "http://localhost:8080/similarMovies/" + id;
    return this.httpClient.get(url); // return the response
  }
  

  getMultiSearch(term:string){
    let url = "http://localhost:8080/multiSearch/" + term;
    return this.httpClient.get(url);
  }

  
  //TV
  // for popular movies, trending movies, top rated movies.
  getPopularTVs(){
    let url = "http://localhost:8080/popularTVs";
    return this.httpClient.get(url); // return the response
  }
  getTrendingTVs(){
    let url = "http://localhost:8080/trendingTVs/";
    return this.httpClient.get(url); // return the response
  }
  getTopRatedTVs(){
    let url = "http://localhost:8080/topRatedTVs/";
    return this.httpClient.get(url); // return the response
  }
  getTVDetails(id: string){
    let url = "http://localhost:8080/tvDetails/" + id;
    return this.httpClient.get(url); // return the response
  }

  getTVVideo(id: string){
    let url = "http://localhost:8080/tvVideo/" + id;
    return this.httpClient.get(url); // return the response
  }

  getTVCast(id: string){
    let url = "http://localhost:8080/tvCast/" + id;
    return this.httpClient.get(url); // return the response
  }

  getTVReview(id: string){
    let url = "http://localhost:8080/tvReview/" + id;
    return this.httpClient.get(url); // return the response
  }

  getRecommendedTVs(id: string){
    let url = "http://localhost:8080/recommendedTVs/" + id;
    return this.httpClient.get(url); // return the response
  }
  getSimilarTVs(id: string){
    let url = "http://localhost:8080/similarTVs/" + id;
    return this.httpClient.get(url); // return the response
  }

  
}

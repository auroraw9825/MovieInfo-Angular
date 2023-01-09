import { Component, OnInit, ViewChild, OnChanges} from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import {PostsService} from "../../services/posts.service";
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public id: any;
  public buttonText: any;
  public movieDetails: any;
  public movieVideo: any;
  public movieCast: any;
  public twitterShareText: any;
  public FBShareText: any;
  public alertType: any;
  public continueWatch=[];
  public watchlist=[];

  public big:any;
  public small:any;

  private _success = new Subject<string>();

  public staticAlertClosed = false;
  public successMessage = '';

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: any;


  constructor( private route: ActivatedRoute, private postsService: PostsService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.fetchDetails();
    this.fetchVideo();

    //check if should display Add to Watchlist or Remove from Watchlist
    this.buttonText = "Add to Watchlist";
    var localMovieString = window.localStorage.getItem("watchlist");
    var curLocal = JSON.parse(localMovieString  ||'[]');
    for(var i = 0; i < curLocal.length; i++) {
      if(curLocal[i] != null && curLocal[i]["id"] == this.id){ //  this id is in the watchlist
        this.buttonText = "Remove from Watchlist";
        break;
      }
    }

    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.big = true;
          this.small = false;
          console.log('Viewport is 900px or over!');
        }
        else {
          this.small = true;
          this.big = false;
          console.log('Viewport is smaller than 900px!');
        }
      });
    
    // in the backend server.js, use encodeURIComponent to encode the url
  }

  fetchDetails(){
    this.postsService.getMovieDetails(this.id).subscribe(res =>{
        this.movieDetails = res;
        this.twitterShareText = (this.movieDetails.twitterText);//.concat(this.movieVideo.twitterURL);
        console.log(this.twitterShareText);

        // add to continue watching
        if(typeof(this.movieDetails.poster_path)!=="undefined" || this.movieDetails.poster_path!==null){
          var ContinueWatchingString = window.localStorage.getItem("continueWatching");
          var continueWatchingArr = JSON.parse(ContinueWatchingString ||'[]');
          var newContinueArr = new Array();
          for(var i = 0; i < continueWatchingArr.length; i++) {
            if(continueWatchingArr[i] != null && continueWatchingArr[i]["id"] != this.id){ //  this id is in the watchlist
              // flagForAddOrNot = false; //already in it, no need to add again to the continue  watching
              //remove the old one and add the new one to the end
              newContinueArr.push(continueWatchingArr[i]);
            }
          }
          // if( flagForAddOrNot) {
          //   continueWatchingArr.push(this.movieDetails);
          //   window.localStorage.setItem("continueWatching", JSON.stringify(continueWatchingArr));
          // }
          newContinueArr.push(this.movieDetails);
          window.localStorage.setItem("continueWatching", JSON.stringify(newContinueArr));
        }

        // if the movie is in the watchlist, visit again will make the movie on the top of the list.
        // only check the id, ignore the media_type here
        var localMovieString = window.localStorage.getItem("watchlist");
        var curLocal = JSON.parse(localMovieString  ||'[]');
        for(var i = 0; i < curLocal.length; i++) {
          if(curLocal[i] != null && curLocal[i]["id"] == this.id){ //  this id is in the watchlist
            // add all movies again and this movie as the last
            var mutateWatchlist = new Array();
            for(var j = 0; j<curLocal.length; j++) {
              if(curLocal[j] != null && curLocal[j]["id"] != this.id){
                mutateWatchlist.push(curLocal[j]);
              }
            }
            // add this movie  at the top , the last one
            mutateWatchlist.push(curLocal[i]);
            window.localStorage.setItem("watchlist", JSON.stringify(mutateWatchlist));
            break;
          }
        }

    });
  }
  fetchVideo(){
    this.postsService.getMovieVideo(this.id).subscribe(res =>{
        this.movieVideo = res;
        this.twitterShareText += this.movieVideo.twitterURL; // add the video link and hashtag
        this.FBShareText="https://www.facebook.com/sharer/sharer.php?u=" + this.movieVideo["FBURL"];
    });
  }
  fetchCast(){
    this.postsService.getMovieCast(this.id).subscribe(res =>{
        this.movieCast = res;    
    });
  }

  addOrRemoveWatchList(clickedMovieDetails: any){
    // make the alert disappear after 5 seconds, or closed by the user.
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

    if (this.buttonText == "Add to Watchlist"){ // means clicked on add to the watchlist
      // this.watchlist = JSON.parse(window.localStorage.getItem('watchlist'));
      if(window.localStorage.getItem("watchlist") == ""){
        var newMovie = new Array();
        newMovie.push(clickedMovieDetails);
        window.localStorage.setItem("watchlist", JSON.stringify(newMovie));
        console.log("empty");
      }
      else{ // already has some movies in it
        var localMovieString = window.localStorage.getItem("watchlist");
        var curLocal = JSON.parse(localMovieString  ||'[]');
        curLocal.push(clickedMovieDetails);
        window.localStorage.setItem("watchlist", JSON.stringify(curLocal));
        console.log("in the else to add");
      }
      //window.localStorage.setItem(clickedMovieDetails.title, JSON.stringify(clickedMovieDetails));
      this.buttonText = "Remove from Watchlist";
      this.alertType = "success"; // green 
      this._success.next(`Added to watchlist.`);
      console.log("add to !");
      console.log(localStorage);
    }
    else if (this.buttonText == "Remove from Watchlist"){
      // window.localStorage.removeItem(clickedMovieDetails.title);
      var localMovieString = window.localStorage.getItem("watchlist");
      var curLocal = JSON.parse(localMovieString  ||'{}');
      for(var i = 0; i < curLocal.length; i++) {
        if(curLocal[i] != null && curLocal[i]["id"] == clickedMovieDetails["id"]){
          console.log("in the if!!!!");
          delete curLocal[i];
        }
      }
      if(curLocal.length == 0){
        window.localStorage.setItem("watchlist", "");
      }
      else{
        window.localStorage.setItem("watchlist", JSON.stringify(curLocal));
      }
      
      this.buttonText ="Add to Watchlist";
      this.alertType = "danger"; // red
      this._success.next(`Removed from watchlist.`);
      console.log("Removed!!");
      console.log(localStorage);
    }
    
  }
  // ngOnChanges(){

  // }
}


// @Component({selector: 'ngbd-alert-selfclosing', templateUrl: './alert-selfclosing.html'})
// export class NgbdAlertSelfclosing implements OnInit {
//   private _success = new Subject<string>();

//   public staticAlertClosed = false;
//   public successMessage = '';

//   @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: any;

//   ngOnInit(): void {

//     this._success.subscribe(message => this.successMessage = message);
//     this._success.pipe(debounceTime(5000)).subscribe(() => {
//       if (this.selfClosingAlert) {
//         this.selfClosingAlert.close();
//       }
//     });
//   }

//   public changeSuccessMessage() { this._success.next(`- Message successfully changed.`); }
// }


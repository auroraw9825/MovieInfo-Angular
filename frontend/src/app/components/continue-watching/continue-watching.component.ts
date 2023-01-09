import { Component, ViewChild, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { convertCompilerOptionsFromJson } from 'typescript';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { state } from '@angular/animations';
// import { watch } from 'node:fs';


@Component({
  selector: 'app-continue-watching',
  templateUrl: './continue-watching.component.html',
  styleUrls: ['./continue-watching.component.css']
})

export class ContinueWatchingComponent implements OnInit {
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  public small: any;
  public big: any;
  public m: any;
  public movieSmall: any = [];


  public storageLen: any;
  public movies: any = [];
  public watchlistArr: any = [];
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // console.log(this.small);
    var watchlist = window.localStorage.getItem("continueWatching");
    var tempWatchlistArr = JSON.parse(watchlist|| "[]");
    for (var i=tempWatchlistArr.length-1; i>=0; i--){ //reverse order
      if(tempWatchlistArr[i]!=null && typeof(tempWatchlistArr[i]["poster_path"])!==undefined && tempWatchlistArr[i]["poster_path"]!==null){
        this.watchlistArr.push(tempWatchlistArr[i]);
      }
    }
    if(this.watchlistArr.length == 0){
      this.storageLen = false;
    }
    else{
      this.storageLen = true;
      // this.movies = this.watchlistArr;
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

      console.log(this.watchlistArr);
      //divided by 6.
      var continueLen = Math.min(this.watchlistArr.length, 24);
      var cnt = Math.floor(continueLen/6);
      // console.log("in continue the cnt is: " + cnt);
      // if(this.storageLen%6 != 0){
      //   cnt += 1;
      // }
      for (var i =0; i <cnt; i++){
        var tempArr = new Array();
        for( var j=0; j<6; j++){
          tempArr.push(this.watchlistArr[i*6+j]);
        }
        this.movies.push(tempArr);
      }
      //最后一层不到六个
      if(cnt <4 && cnt*6<continueLen){
        var tempArr = new Array();
        for( var j=cnt*6; j<continueLen; j++){
          tempArr.push(this.watchlistArr[j]);
        }
        this.movies.push(tempArr);
      }
      // if(tempArr != []){ // not empty
      //   this.movies.push(tempArr);
      // }
      // console.log("cnt: "+ cnt);
      // console.log("movies in continue.");
      // console.log(this.movies);

      this.movieSmall = this.watchlistArr.slice(0, continueLen);

  }
  
  @ViewChild('carousel', {static : true}) 
  public carousel!: NgbCarousel;  //ts included a strict class checking where all properties should be declared in constructor. So to work around that, just add a !.
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  
}

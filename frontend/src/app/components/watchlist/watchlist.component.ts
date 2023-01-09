import { Component, ViewChild, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { convertCompilerOptionsFromJson } from 'typescript';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { state } from '@angular/animations';
// import { watch } from 'node:fs';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  public small: any;
  public big: any;
  public m: any;
  public movieSmall: any = [];
  public CntEnough:any = true;
  public CntEnoughSmall:any = true;

  public storageLen: any;
  public movies: any = [];
  public watchlistArr: any = [];
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // console.log(this.small);
    var watchlist = window.localStorage.getItem("watchlist");
    var tempWatchlistArr = JSON.parse(watchlist|| "[]");
    for (var i=tempWatchlistArr.length-1; i>=0; i--){
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

    if(this.watchlistArr.length <=6){
      this.CntEnough = false;
    }
    if(this.watchlistArr.length <=1){
      this.CntEnoughSmall = false;
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
      var cnt = Math.floor(this.watchlistArr.length/6);
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
      var tempArr = new Array();
      for( var j=cnt*6; j<this.watchlistArr.length; j++){
        console.log("j: "+ j);
        tempArr.push(this.watchlistArr[j]);
      }
      if(tempArr != []){ // not empty
        this.movies.push(tempArr);
      }
      console.log("cnt: "+ cnt);
      console.log("movies in watchlist.");
      console.log(this.movies);

      this.movieSmall = this.watchlistArr;

  }
  
  // @ViewChild('carousel', {static : true}) 
  // public carousel!: NgbCarousel;  //ts included a strict class checking where all properties should be declared in constructor. So to work around that, just add a !.
  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }
  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
  
}


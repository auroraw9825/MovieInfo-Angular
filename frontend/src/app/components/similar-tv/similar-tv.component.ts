import { Component, ViewChild, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { convertCompilerOptionsFromJson } from 'typescript';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { state } from '@angular/animations';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import {Router} from "@angular/router";


@Component({
  selector: 'app-similar-tv',
  templateUrl: './similar-tv.component.html',
  styleUrls: ['./similar-tv.component.css']
})

export class SimilarTVComponent{
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  public posts: any;
  public movies:any = [];
  public m: any;
  public movieSmall: any = [];

  public small: any;
  public big: any;
  public id:any;

  constructor(private postsService: PostsService, public breakpointObserver: BreakpointObserver, private route: ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
      this.fetchData();
      this.fetchSmallData();

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
    
  }

  fetchData(){
    this.postsService.getSimilarTVs(this.id).subscribe(res =>{
        this.posts = res;
        var resLen = Math.min(this.posts.length, 24);
        var cnt = Math.floor(resLen/6);
        for (var i =0; i <cnt; i++){
          var tempArr = new Array();
          for( var j=0; j<6; j++){
            tempArr.push(this.posts[i*6+j]);
          }
          this.movies.push(tempArr);
        }
        //最后一层不到六个
        if(cnt <4 && cnt*6<resLen){
          var tempArr = new Array();
          for( var j=cnt*6; j<resLen; j++){
            tempArr.push(this.posts[j]);
          }
          this.movies.push(tempArr);
        }
    });
  }

  fetchSmallData(){
    this.postsService.getSimilarTVs(this.id).subscribe(res =>{
        this.m = res;
        for(var i=0; i<this.m.length;i++){
          this.movieSmall.push(this.m[i]);
        }
    });
  }

  navigateToDetails(id:string): void {
    // console.log("Clicked");
    this.router.navigateByUrl("/watch/tv/"+id).then(() => {
      window.location.reload();
    });
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



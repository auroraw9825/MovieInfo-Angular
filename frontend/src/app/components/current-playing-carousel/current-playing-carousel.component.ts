// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsService} from "../../services/posts.service";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-current-playing-carousel',
  templateUrl: './current-playing-carousel.component.html',
  styleUrls: ['./current-playing-carousel.component.css']
})
// export class CurrentPlayingCarouselComponent implements OnInit {
export class CurrentPlayingCarouselComponent{
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  public posts: any;

  public big:any;
  public small:any;

  constructor(private postsService: PostsService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.fetchData();

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
    this.postsService.getAllPosts().subscribe(res =>{
        this.posts = res;
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

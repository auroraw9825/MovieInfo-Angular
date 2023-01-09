import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-tv-reviews',
  templateUrl: './tv-reviews.component.html',
  styleUrls: ['./tv-reviews.component.css']
})
export class TvReviewsComponent implements OnInit {
  public movieReviews: any;
  public id: any;

  public big:any;
  public small:any;
  
  constructor(private route: ActivatedRoute, private postsService: PostsService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
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
    this.postsService.getTVReview(this.id).subscribe(res =>{
        this.movieReviews = res;
    });
  }

}

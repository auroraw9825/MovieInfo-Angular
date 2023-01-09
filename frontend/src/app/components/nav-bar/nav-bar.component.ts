import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {debounceTime, map} from 'rxjs/operators';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public model: any;
  
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
  
  // search: OperatorFunction<string, readonly {id:number, title:string, backdrop_path:string, media_type:string}[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     map(term => term === '' ? []
  //       : statesWithFlags.filter(v => v.title.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 7))
  //   )
  // formatter = (x: {title: string}) => x.title;

  constructor(private postsService: PostsService, public breakpointObserver: BreakpointObserver, public router:Router) { }
  public search: any = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      switchMap(term => term === '' ? []
        : this.postsService.getMultiSearch(term).pipe()
      )
    )
  formatter = (x: {name: string}) => x.name;


  navigateToMovieDetails(id:string): void {
    // console.log("Clicked");
    this.router.navigateByUrl("/watch/movie/"+id).then(() => {
      window.location.reload();
    });
  }

  navigateToTVDetails(id:string): void {
    // console.log("Clicked");
    this.router.navigateByUrl("/watch/tv/"+id).then(() => {
      window.location.reload();
    });
  }

  
}

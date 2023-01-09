import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { watch } from 'node:fs';
// import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  //public category: any;
  // public watchlist=[];
  // public continueWatch=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.category = this.route.snapshot.paramMap.get("category"); // get the category value from the url??
    // window.localStorage.clear();
    // window.localStorage.setItem("watchlist", "");
    // window.localStorage.setItem("continueWatch", "");
    // console.log(window.localStorage);
  }
}

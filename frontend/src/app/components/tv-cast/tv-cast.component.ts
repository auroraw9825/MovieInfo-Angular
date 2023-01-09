import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import {PostsService} from "../../services/posts.service";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-tv-cast',
  templateUrl: './tv-cast.component.html',
  styleUrls: ['./tv-cast.component.css']
})
export class TvCastComponent implements OnInit {
  public id: any;
  public movieCast: any;
  public castDetail: any;
  public person_id:any;
  public hasCast: any;
  public castExternalIds: any;

  public big:any;
  public small:any;

  constructor( private route: ActivatedRoute, private postsService: PostsService, private modalService: NgbModal, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.fetchCast();

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
  fetchCast(){
    this.postsService.getTVCast(this.id).subscribe(res =>{ // id is the movie id
        this.movieCast = res;
        if(this.movieCast.length>0){
          this.hasCast = true;
        }
        else{
          this.hasCast = false;
        }
    });
  }

  // fetchCastDetail(person_id: string){ // the person id
    
  // }
  
  async openModal(m:any) { // m is the movie
    this.person_id = m.id;
    this.postsService.getCastDetail(m.id).subscribe(res =>{
      this.castDetail = res;
      this.postsService.getCastDExternalID(m.id).subscribe(res =>{
        this.castExternalIds = res;
        console.log(this.castExternalIds);
        var modalRef = this.modalService.open(NgbdModalContentTV, { size: 'lg' , centered: true, scrollable: true});
        modalRef.componentInstance.actorName = m.name;
        modalRef.componentInstance.imgPath = m.profile_path;
        
        modalRef.componentInstance.birthday = this.castDetail.birthday;
        modalRef.componentInstance.birthPlace = this.castDetail.birthPlace;
        modalRef.componentInstance.gender = this.castDetail.gender;
        modalRef.componentInstance.homepage = this.castDetail.homepage;
        modalRef.componentInstance.knownFor = this.castDetail.knownFor;
        modalRef.componentInstance.alsoKnownAs = this.castDetail.alsoKnownAs;
        modalRef.componentInstance.biography = this.castDetail.biography;
        modalRef.componentInstance.imdb_id = this.castExternalIds.imdb_id;
        modalRef.componentInstance.ins_id = this.castExternalIds.instagram_id;
        modalRef.componentInstance.fb_id = this.castExternalIds.facebook_id;
        modalRef.componentInstance.twitter_id = this.castExternalIds.twitter_id;
      });
      
      // this.postsService.getCastDetail(m.id).subscribe(res =>{
      //   this.castDetail = res;
      // }
    });
    // this.fetchCastDetail(m.id).subscribe(res => {
      
    // })
    
    
  //   modalRef = this.modalService.open(NgbdModalContent);
  }

}

// the content of the modal
@Component({
  selector: 'ngbd-modal-content',
  styles: [`
  .my-custom-class{
    background-color: white;
  }
  .my-custom-class .tooltip-inner {
    background-color: white;
    color: black;
    border: 1px silver solid;
  }
  .my-custom-class .arrow::before {
    border-top-color: #FFFAFA;
  }
  `],
  template: `

    <div class="modal-header" >
      <h4 class="modal-title" style="font-size: 22px;">{{actorName}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">

      <div *ngIf="big==true" class="row">
        <img [src]="imgPath" style="height:220px; width:160px; margin-left:10px; magin-right: 20px;">
        <div style="margin-left:25px; width:70%;">
          <div *ngIf="birthday!=''">Birth: {{birthday}}</div>
          <div *ngIf="birthPlace!=''">Birth Place: {{birthPlace}}</div>
          <div *ngIf="gender!=''">Gender: {{gender}}</div>
          <div *ngIf="homepage!=''">Website: <a attr.href="{{homepage}}" target="_blank">{{homepage}}</a></div>
          <div *ngIf="knownFor!=''">Known for: {{knownFor}}</div>
          <div *ngIf="alsoKnownAs!=''">Also Known as: {{alsoKnownAs}}</div>
          <div class="row">
            <div *ngIf="imdb_id!=''">
              <a href="{{imdb_id}}" target="_blank" style="margin-left:15px;" ngbPopover="Visit IMDB" triggers="mouseenter:mouseleave">
                <i class="fa fa-imdb" style="font-size:30px; color: #ffcc00;"></i>
              </a>
            </div>
            <div *ngIf="ins_id!=''">
              <a href="{{ins_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Instagram" triggers="mouseenter:mouseleave">
                <i class="fa fa-instagram" style="font-size:30px; color: #990099;"></i>
              </a>
            </div>
            <div *ngIf="fb_id!=''">
              <a href="{{fb_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Facebook" triggers="mouseenter:mouseleave">
                <i class="fa fa-facebook-square" style="font-size:30px; color: #blue;"></i>
              </a>
            </div>
            <div *ngIf="twitter_id!=''">
              <a href="{{twitter_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Twitter" triggers="mouseenter:mouseleave">
                <i class="fa fa-twitter" style="font-size:30px; color: #deepskyblue;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="small==true">
        <img [src]="imgPath" style="height:500px; width:340px; margin-left:10px; magin-right: 20px;">
        <div style="margin-left:10px; width:340px;">
          <div *ngIf="birthday !=''">Birth: {{birthday || "N/A"}}</div>
          <div *ngIf="birthPlace!=''">Birth Place: {{birthPlace || "N/A"}}</div>
          <div *ngIf="gender!=''">Gender: {{gender || "N/A"}}</div>
          <div *ngIf="homepage!=''">Website: <a attr.href="{{homepage}}" target="_blank">{{homepage}}</a></div>
          <div *ngIf="knownFor!=''">Known for: {{knownFor || "N/A"}}</div>
          <div *ngIf="alsoKnownAs!=''">Also Known as: {{alsoKnownAs || "N/A"}}</div>
          <div class="row">
            <div *ngIf="imdb_id!=''">
              <a href="{{imdb_id}}" target="_blank" style="margin-left:15px;" ngbPopover="Visit IMDB" triggers="mouseenter:mouseleave">
                <i class="fa fa-imdb" style="font-size:30px; color: #ffcc00;"></i>
              </a>
            </div>
            <div *ngIf="ins_id!=''">
              <a href="{{ins_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Instagram" triggers="mouseenter:mouseleave">
                <i class="fa fa-instagram" style="font-size:30px; color: #990099;"></i>
              </a>
            </div>
            <div *ngIf="fb_id!=''">
              <a href="{{fb_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Facebook" triggers="mouseenter:mouseleave">
                <i class="fa fa-facebook-square" style="font-size:30px; color: #blue;"></i>
              </a>
            </div>
            <div *ngIf="twitter_id!=''">
              <a href="{{twitter_id}}" target="_blank" style="margin-left:10px;" ngbPopover="Visit Twitter" triggers="mouseenter:mouseleave">
                <i class="fa fa-twitter" style="font-size:30px; color: #deepskyblue;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br>
      <div style="width:100%; margin-left:10px;">
        <div style="font-size: 24px; font-weight-bold;">Biography</div>
        <div>{{biography || "N/A"}}</div>
      </div>
    </div>
  `
})
export class NgbdModalContentTV {
  @Input() actorName:any;
  @Input() imgPath:any;
  @Input() birthday:any;
  @Input() birthPlace:any;
  @Input() gender:any;
  @Input() homepage:any;
  @Input() knownFor:any;
  @Input() alsoKnownAs:any;
  @Input() biography:any;
  @Input() imdb_id:any;
  @Input() ins_id:any;
  @Input() fb_id:any;
  @Input() twitter_id:any;

  public big:any;
  public small:any;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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

}
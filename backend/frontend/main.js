(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aurorawong/HW8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "4cG8":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movie-cast/movie-cast.component */ "cORB");
/* harmony import */ var _movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../movie-reviews/movie-reviews.component */ "6MaC");
/* harmony import */ var _recommended_movie_recommended_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../recommended-movie/recommended-movie.component */ "TNoQ");
/* harmony import */ var _similar_movie_similar_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../similar-movie/similar-movie.component */ "JzRl");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













const _c0 = ["selfClosingAlert"];
function MovieDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.movieVideo.key);
} }
function MovieDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r1.movieVideo.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 180)("width", 325);
} }
function MovieDetailsComponent_div_17_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.movieDetails == null ? null : ctx_r4.movieDetails.title);
} }
function MovieDetailsComponent_div_17_ngb_alert_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailsComponent_div_17_ngb_alert_24_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r5.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.successMessage, " ");
} }
function MovieDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_div_17_h1_2_Template, 2, 1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_div_17_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.addOrRemoveWatchList(ctx_r9.movieDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MovieDetailsComponent_div_17_ngb_alert_24_Template, 3, 2, "ngb-alert", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.movieDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.release_year, " | \u2605 ", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.vote_average, " | ", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.runtime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.spoken_languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.successMessage);
} }
function MovieDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.movieDetails.overview);
} }
class MovieDetailsComponent {
    constructor(route, postsService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.continueWatch = [];
        this.watchlist = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchDetails();
        this.fetchVideo();
        //check if should display Add to Watchlist or Remove from Watchlist
        this.buttonText = "Add to Watchlist";
        var localMovieString = window.localStorage.getItem("watchlist");
        var curLocal = JSON.parse(localMovieString || '[]');
        for (var i = 0; i < curLocal.length; i++) {
            if (curLocal[i] != null && curLocal[i]["id"] == this.id) { //  this id is in the watchlist
                this.buttonText = "Remove from Watchlist";
                break;
            }
        }
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchDetails() {
        this.postsService.getMovieDetails(this.id).subscribe(res => {
            this.movieDetails = res;
            this.twitterShareText = (this.movieDetails.twitterText); //.concat(this.movieVideo.twitterURL);
            console.log(this.twitterShareText);
            // add to continue watching
            if (typeof (this.movieDetails.poster_path) !== "undefined" || this.movieDetails.poster_path !== null) {
                var ContinueWatchingString = window.localStorage.getItem("continueWatching");
                var continueWatchingArr = JSON.parse(ContinueWatchingString || '[]');
                var newContinueArr = new Array();
                for (var i = 0; i < continueWatchingArr.length; i++) {
                    if (continueWatchingArr[i] != null && continueWatchingArr[i]["id"] != this.id) { //  this id is in the watchlist
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
            var curLocal = JSON.parse(localMovieString || '[]');
            for (var i = 0; i < curLocal.length; i++) {
                if (curLocal[i] != null && curLocal[i]["id"] == this.id) { //  this id is in the watchlist
                    // add all movies again and this movie as the last
                    var mutateWatchlist = new Array();
                    for (var j = 0; j < curLocal.length; j++) {
                        if (curLocal[j] != null && curLocal[j]["id"] != this.id) {
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
    fetchVideo() {
        this.postsService.getMovieVideo(this.id).subscribe(res => {
            this.movieVideo = res;
            this.twitterShareText += this.movieVideo.twitterURL; // add the video link and hashtag
            this.FBShareText = "https://www.facebook.com/sharer/sharer.php?u=" + this.movieVideo["FBURL"];
        });
    }
    fetchCast() {
        this.postsService.getMovieCast(this.id).subscribe(res => {
            this.movieCast = res;
        });
    }
    addOrRemoveWatchList(clickedMovieDetails) {
        // make the alert disappear after 5 seconds, or closed by the user.
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        if (this.buttonText == "Add to Watchlist") { // means clicked on add to the watchlist
            // this.watchlist = JSON.parse(window.localStorage.getItem('watchlist'));
            if (window.localStorage.getItem("watchlist") == "") {
                var newMovie = new Array();
                newMovie.push(clickedMovieDetails);
                window.localStorage.setItem("watchlist", JSON.stringify(newMovie));
                console.log("empty");
            }
            else { // already has some movies in it
                var localMovieString = window.localStorage.getItem("watchlist");
                var curLocal = JSON.parse(localMovieString || '[]');
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
        else if (this.buttonText == "Remove from Watchlist") {
            // window.localStorage.removeItem(clickedMovieDetails.title);
            var localMovieString = window.localStorage.getItem("watchlist");
            var curLocal = JSON.parse(localMovieString || '{}');
            for (var i = 0; i < curLocal.length; i++) {
                if (curLocal[i] != null && curLocal[i]["id"] == clickedMovieDetails["id"]) {
                    console.log("in the if!!!!");
                    delete curLocal[i];
                }
            }
            if (curLocal.length == 0) {
                window.localStorage.setItem("watchlist", "");
            }
            else {
                window.localStorage.setItem("watchlist", JSON.stringify(curLocal));
            }
            this.buttonText = "Add to Watchlist";
            this.alertType = "danger"; // red
            this._success.next(`Removed from watchlist.`);
            console.log("Removed!!");
            console.log(localStorage);
        }
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], viewQuery: function MovieDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 45, vars: 6, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["property", "og:url", "content", "https://www.your-domain.com/your-page.html"], ["property", "og:type", "content", "website"], ["property", "og:title", "content", "Your Website Title"], ["property", "og:description", "content", "Your description"], ["property", "og:image", "content", "https://www.your-domain.com/path/image.jpg"], [2, "margin-left", "15%", "width", "70%", "margin-top", "10%"], [1, "row"], ["style", "width: 60%; height: 50%; margin-right: 5%;", 4, "ngIf"], ["style", "margin-right: 2%;", 4, "ngIf"], ["style", "width: 350px;", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "30px", "margin-right", "5px"], ["target", "_blank", "data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button_count", 1, "fb-share-button", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "30px"], [2, "width", "60%", "height", "50%", "margin-right", "5%"], [3, "videoId"], [2, "margin-right", "2%"], [3, "videoId", "height", "width"], [2, "width", "350px"], [1, "span_title"], [1, "span_text"], ["id", "Btn", "ng-model", "WLBtn", 1, "watchListButton", 2, "outline", "none", 3, "click"], ["style", " margin-top: 10px; font-size: 16px;", 3, "type", "closed", 4, "ngIf"], [2, "margin-top", "10px", "font-size", "16px", 3, "type", "closed"], ["selfClosingAlert", ""], [2, "text-align", "justify"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "meta", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "meta", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieDetailsComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieDetailsComponent_div_16_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieDetailsComponent_div_17_Template, 25, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MovieDetailsComponent_div_22_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-movie-cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "app-movie-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-recommended-movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-similar-movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieVideo && ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieVideo && ctx.small == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.twitterShareText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.FBShareText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_7__["MovieCastComponent"], _movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_8__["MovieReviewsComponent"], _recommended_movie_recommended_movie_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedMovieComponent"], _similar_movie_similar_movie_component__WEBPACK_IMPORTED_MODULE_10__["SimilarMovieComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }\n        h2[_ngcontent-%COMP%]{\n            font-size: 20px; \n            font-style: italic;\n            color: silver;\n        }\n        h3[_ngcontent-%COMP%]{\n            font-size: 22px; \n            color: silver;\n        }\n        h4[_ngcontent-%COMP%]{\n            font-size: 13px; \n            font-weight: bold;\n            color: white;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        p[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }\n        .span_title[_ngcontent-%COMP%]{\n            font-size: 16px; \n            \n            color: white;\n        }\n        .span_text[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }\n        .watchListButton[_ngcontent-%COMP%]{\n            width: 200px;\n            height:40px;\n            background-color: DodgerBlue;\n            color:white;\n            font-size: 18px;\n            border:none;\n            border-radius: 3px;\n            margin-top: 5px;\n        }"] });


/***/ }),

/***/ "6MaC":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-reviews/movie-reviews.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieReviewsComponent", function() { return MovieReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MovieReviewsComponent_div_7_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reviews ", ctx_r2.movieReviews.length, "");
} }
function MovieReviewsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieReviewsComponent_div_7_h1_1_Template, 2, 1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieReviews.length != 0);
} }
function MovieReviewsComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", re_r3 == null ? null : re_r3.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", re_r3 == null ? null : re_r3.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r3 == null ? null : re_r3.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r3 == null ? null : re_r3.author, " on ", re_r3 == null ? null : re_r3.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r3 == null ? null : re_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", re_r3 == null ? null : re_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieReviewsComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", re_r3 == null ? null : re_r3.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", re_r3 == null ? null : re_r3.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r3 == null ? null : re_r3.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r3 == null ? null : re_r3.author, " on ", re_r3 == null ? null : re_r3.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r3 == null ? null : re_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", re_r3 == null ? null : re_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieReviewsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieReviewsComponent_div_8_div_1_Template, 22, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieReviewsComponent_div_8_div_2_Template, 23, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.big == true && ctx_r1.movieReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.small == true && ctx_r1.movieReviews);
} }
class MovieReviewsComponent {
    constructor(route, postsService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getMovieReview(this.id).subscribe(res => {
            this.movieReviews = res;
        });
    }
}
MovieReviewsComponent.ɵfac = function MovieReviewsComponent_Factory(t) { return new (t || MovieReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
MovieReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieReviewsComponent, selectors: [["app-movie-reviews"]], decls: 9, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "reviewSection"], [1, "row"], [2, "height", "200px", "width", "200px"], [1, "imgPosition", 3, "src"], [1, "header"], [2, "background-color", "black", "width", "50px", "height", "25px", "color", "white", "border-radius", "10px", "margin-left", "20px", "margin-top", "3px"], [1, "rating"], [1, "t1"], [1, "t2"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 1, "readRest", 2, "font-size", "15px", 3, "href"], [1, "reviewSectionSmall"], [1, "innerSec"], [2, "height", "100px", "width", "100px"]], template: function MovieReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieReviewsComponent_div_7_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieReviewsComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        .reviewSection[_ngcontent-%COMP%]{\n            background-color: white;\n            width: 1000px;\n            height: 250px;\n            border-radius: 20px;\n            margin: 15px;\n        }\n        .reviewSectionSmall[_ngcontent-%COMP%]{\n            background-color: white;\n            width: 290px;\n            height: 460px;\n            border-radius: 5px;\n            margin-bottom: 30px;\n        }\n        .innerSec[_ngcontent-%COMP%]{\n            margin-left: 15px;\n            width:250px;\n        }\n        .imgPosition[_ngcontent-%COMP%]{\n            height: 90px; \n            width: 90px;\n            position: relative;\n            left:50px;\n            top: 30px;\n        }\n        .header[_ngcontent-%COMP%]{\n            font-size: 20px;\n            font-weight: bold;\n            color: black;\n            margin-left: 15px;\n            margin-bottom: 10px;\n        }\n        .t1[_ngcontent-%COMP%]{\n            font-size: 14px;\n            color: grey;\n        }\n        .t2[_ngcontent-%COMP%]{\n            font-size: 15px;\n            color: black;\n            text-overflow: ellipsis; \n            display: -webkit-box;\n            max-width: 730px;\n            -webkit-line-clamp: 3; \n            -webkit-box-orient: vertical;\n            overflow: hidden;\n        }\n        .rating[_ngcontent-%COMP%]{\n            color:  white;\n            padding-left: 5px;\n            font-size: 15px;\n        }\n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }\n        .readRest[_ngcontent-%COMP%]:link{\n            text-decoration: underline;\n        }"] });


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


// export class NgbdModalContent {
//   @Input() id;
//   constructor(public activeModal: NgbActiveModal) {}
// }
// 下面的是简历这个component时候的class
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 2, vars: 0, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E2p+":
/*!*******************************************************************!*\
  !*** ./src/app/components/top-rated-tv/top-rated-tv.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopRatedTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedTVComponent", function() { return TopRatedTVComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "tv", a2]; };
function TopRatedTVComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function TopRatedTVComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopRatedTVComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function TopRatedTVComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopRatedTVComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function TopRatedTVComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TopRatedTVComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopRatedTVComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function TopRatedTVComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function TopRatedTVComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopRatedTVComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function TopRatedTVComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TopRatedTVComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopRatedTVComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class TopRatedTVComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getTopRatedTVs().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getTopRatedTVs().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
TopRatedTVComponent.ɵfac = function TopRatedTVComponent_Factory(t) { return new (t || TopRatedTVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TopRatedTVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopRatedTVComponent, selectors: [["app-top-rated-tv"]], viewQuery: function TopRatedTVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function TopRatedTVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopRatedTVComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopRatedTVComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtcmF0ZWQtdHYuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "Fv7f":
/*!***************************************************************!*\
  !*** ./src/app/components/tv-reviews/tv-reviews.component.ts ***!
  \***************************************************************/
/*! exports provided: TvReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvReviewsComponent", function() { return TvReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TvReviewsComponent_div_7_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reviews ", ctx_r2.movieReviews.length, "");
} }
function TvReviewsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvReviewsComponent_div_7_h1_1_Template, 2, 1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieReviews.length != 0);
} }
function TvReviewsComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", re_r3 == null ? null : re_r3.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", re_r3 == null ? null : re_r3.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r3 == null ? null : re_r3.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r3 == null ? null : re_r3.author, " on ", re_r3 == null ? null : re_r3.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r3 == null ? null : re_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", re_r3 == null ? null : re_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvReviewsComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", re_r3 == null ? null : re_r3.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", re_r3 == null ? null : re_r3.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r3 == null ? null : re_r3.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r3 == null ? null : re_r3.author, " on ", re_r3 == null ? null : re_r3.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r3 == null ? null : re_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", re_r3 == null ? null : re_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvReviewsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvReviewsComponent_div_8_div_1_Template, 22, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvReviewsComponent_div_8_div_2_Template, 23, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.big == true && ctx_r1.movieReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.small == true && ctx_r1.movieReviews);
} }
class TvReviewsComponent {
    constructor(route, postsService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getTVReview(this.id).subscribe(res => {
            this.movieReviews = res;
        });
    }
}
TvReviewsComponent.ɵfac = function TvReviewsComponent_Factory(t) { return new (t || TvReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TvReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvReviewsComponent, selectors: [["app-tv-reviews"]], decls: 9, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "reviewSection"], [1, "row"], [2, "height", "200px", "width", "200px"], [1, "imgPosition", 3, "src"], [1, "header"], [2, "background-color", "black", "width", "50px", "height", "25px", "color", "white", "border-radius", "10px", "margin-left", "20px", "margin-top", "3px"], [1, "rating"], [1, "t1"], [1, "t2"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 2, "font-size", "15px", 3, "href"], [1, "reviewSectionSmall"], [1, "innerSec"], [2, "height", "100px", "width", "100px"]], template: function TvReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvReviewsComponent_div_7_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TvReviewsComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0di1yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        .reviewSection[_ngcontent-%COMP%]{\n            background-color: white;\n            width: 1000px;\n            height: 250px;\n            border-radius: 20px;\n            margin: 15px;\n        }\n        .reviewSectionSmall[_ngcontent-%COMP%]{\n            background-color: white;\n            width: 290px;\n            height: 460px;\n            border-radius: 5px;\n            margin-bottom: 30px;\n        }\n        .innerSec[_ngcontent-%COMP%]{\n            margin-left: 15px;\n            width:250px;\n        }\n        .imgPosition[_ngcontent-%COMP%]{\n            height: 90px; \n            width: 90px;\n            position: relative;\n            left:50px;\n            top: 30px;\n        }\n        .header[_ngcontent-%COMP%]{\n            font-size: 20px;\n            font-weight: bold;\n            color: black;\n            margin-left: 15px;\n            margin-bottom: 10px;\n        }\n        .t1[_ngcontent-%COMP%]{\n            font-size: 14px;\n            color: grey;\n        }\n        .t2[_ngcontent-%COMP%]{\n            font-size: 15px;\n            color: black;\n            text-overflow: ellipsis; \n            display: -webkit-box;\n            max-width: 730px;\n            -webkit-line-clamp: 3; \n            -webkit-box-orient: vertical;\n            overflow: hidden;\n        }\n        .rating[_ngcontent-%COMP%]{\n            color:  white;\n            padding-left: 5px;\n            font-size: 15px;\n        }\n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }"] });


/***/ }),

/***/ "IAgu":
/*!***************************************************************!*\
  !*** ./src/app/components/commonpage/commonpage.component.ts ***!
  \***************************************************************/
/*! exports provided: CommonpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonpageComponent", function() { return CommonpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommonpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonpageComponent.ɵfac = function CommonpageComponent_Factory(t) { return new (t || CommonpageComponent)(); };
CommonpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonpageComponent, selectors: [["app-commonpage"]], decls: 2, vars: 0, template: function CommonpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "commonpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb25wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "InEX":
/*!*********************************************************!*\
  !*** ./src/app/components/tv-cast/tv-cast.component.ts ***!
  \*********************************************************/
/*! exports provided: TvCastComponent, NgbdModalContentTV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCastComponent", function() { return TvCastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentTV", function() { return NgbdModalContentTV; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TvCastComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TvCastComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvCastComponent_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const m_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.openModal(m_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r3.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r3.character);
} }
function TvCastComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvCastComponent_div_9_div_1_Template, 10, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieCast);
} }
function NgbdModalContentTV_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r3.ins_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r4.fb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_7_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r5.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NgbdModalContentTV_div_7_div_14_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NgbdModalContentTV_div_7_div_15_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NgbdModalContentTV_div_7_div_16_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NgbdModalContentTV_div_7_div_17_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r0.birthday, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r0.birthPlace, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r0.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r0.knownFor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r0.alsoKnownAs, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.imdb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ins_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.fb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.twitter_id != "");
} }
function NgbdModalContentTV_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r6.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r7.ins_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_8_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r8.fb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_8_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r9.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContentTV_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NgbdModalContentTV_div_8_div_14_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NgbdModalContentTV_div_8_div_15_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NgbdModalContentTV_div_8_div_16_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NgbdModalContentTV_div_8_div_17_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r1.birthday || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r1.birthPlace || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r1.gender || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r1.knownFor || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r1.alsoKnownAs || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.imdb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ins_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.fb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.twitter_id != "");
} }
class TvCastComponent {
    constructor(route, postsService, modalService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchCast();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchCast() {
        this.postsService.getTVCast(this.id).subscribe(res => {
            this.movieCast = res;
            if (this.movieCast.length > 0) {
                this.hasCast = true;
            }
            else {
                this.hasCast = false;
            }
        });
    }
    // fetchCastDetail(person_id: string){ // the person id
    // }
    openModal(m) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.person_id = m.id;
            this.postsService.getCastDetail(m.id).subscribe(res => {
                this.castDetail = res;
                this.postsService.getCastDExternalID(m.id).subscribe(res => {
                    this.castExternalIds = res;
                    console.log(this.castExternalIds);
                    var modalRef = this.modalService.open(NgbdModalContentTV, { size: 'lg', centered: true, scrollable: true });
                    modalRef.componentInstance.actorName = m.name;
                    modalRef.componentInstance.imgPath = m.profile_path;
                    modalRef.componentInstance.birthday = this.castDetail.birthday;
                    modalRef.componentInstance.birthPlace = this.castDetail.birthPlace;
                    modalRef.componentInstance.gender = this.castDetail.gender;
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
        });
    }
}
TvCastComponent.ɵfac = function TvCastComponent_Factory(t) { return new (t || TvCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
TvCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TvCastComponent, selectors: [["app-tv-cast"]], decls: 10, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], [4, "ngIf"], ["class", "row flex-row flex-nowrap", "style", "background-color: #000033; overflow-x: scroll;", 4, "ngIf"], [1, "row", "flex-row", "flex-nowrap", 2, "background-color", "#000033", "overflow-x", "scroll"], ["class", "oneCard", "style", "width: 170px; margin:5px;", 4, "ngFor", "ngForOf"], [1, "oneCard", 2, "width", "170px", "margin", "5px"], [2, "width", "170px", "margin", "5px", 3, "click"], ["alt", "m.title", 1, "card-img-top", 2, "border-radius", "6% 6% 0 0", 3, "src"], [1, "card-body", 2, "background-color", "white", "border-radius", "0 0 6% 6%"], [2, "text-align", "center", "font-weight", "bold", "font-size", "15px"], [2, "text-align", "center", "font-weight", "bold", "font-size", "17px"], [2, "text-align", "center", "font-size", "15px"]], template: function TvCastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TvCastComponent_div_8_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TvCastComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasCast == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasCast == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0di1jYXN0LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .row[_ngcontent-%COMP%]::-webkit-scrollbar {\n            width: 1em;\n            height: 6px;\n            border-radius: 3px;\n            background-color: #000033;\n            border: 1px solid darkgrey;\n        }   \n        .row[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        }\n        .row[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n            background-color: darkgrey;\n            outline: 1px solid slategrey;\n            border-radius: 3px;\n        }\n        .modal-dialog[_ngcontent-%COMP%] {\n            width: 1000px;\n        }\n        .modal-content[_ngcontent-%COMP%]{\n            width: 1000px;\n        }\n        .ngbd-modal-content[_ngcontent-%COMP%]{\n            width: 1000px;\n        }\n\n        \n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }\n        h2[_ngcontent-%COMP%]{\n            font-size: 20px; \n            font-style: italic;\n            color: silver;\n        }\n        h3[_ngcontent-%COMP%]{\n            font-size: 22px; \n            color: silver;\n        }\n        h4[_ngcontent-%COMP%]{\n            font-size: 13px; \n            font-weight: bold;\n            color: white;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        p[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }"] });
// the content of the modal
class NgbdModalContentTV {
    constructor(activeModal, modalService, breakpointObserver) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
NgbdModalContentTV.ɵfac = function NgbdModalContentTV_Factory(t) { return new (t || NgbdModalContentTV)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
NgbdModalContentTV.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgbdModalContentTV, selectors: [["ngbd-modal-content"]], inputs: { actorName: "actorName", imgPath: "imgPath", birthday: "birthday", birthPlace: "birthPlace", gender: "gender", knownFor: "knownFor", alsoKnownAs: "alsoKnownAs", biography: "biography", imdb_id: "imdb_id", ins_id: "ins_id", fb_id: "fb_id", twitter_id: "twitter_id" }, decls: 15, vars: 4, consts: [[1, "modal-header"], [1, "modal-title", 2, "font-size", "22px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [2, "width", "100%", "margin-left", "10px"], [2, "font-size", "24px"], [1, "row"], [2, "height", "220px", "width", "160px", "margin-left", "10px", "magin-right", "20px", 3, "src"], [2, "margin-left", "25px", "width", "70%"], ["target", "_blank", "ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", 2, "margin-left", "15px", 3, "href"], [1, "fa", "fa-imdb", 2, "font-size", "30px", "color", "#ffcc00"], ["target", "_blank", "ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-instagram", 2, "font-size", "30px", "color", "#990099"], ["target", "_blank", "ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "30px", "color", "#blue"], ["target", "_blank", "ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "30px", "color", "#deepskyblue"], [2, "height", "500px", "width", "340px", "margin-left", "10px", "magin-right", "20px", 3, "src"], [2, "margin-left", "10px", "width", "340px"]], template: function NgbdModalContentTV_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgbdModalContentTV_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgbdModalContentTV_div_7_Template, 18, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgbdModalContentTV_div_8_Template, 18, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.actorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.biography || "N/A");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopover"]], styles: [".my-custom-class[_ngcontent-%COMP%]{\n    background-color: white;\n  }\n  .my-custom-class[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    border: 1px silver solid;\n  }\n  .my-custom-class[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    border-top-color: #FFFAFA;\n  }"] });


/***/ }),

/***/ "IxMW":
/*!***********************************************************************************!*\
  !*** ./src/app/components/popular-movies-cards/popular-movies-cards.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PopularMoviesCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMoviesCardsComponent", function() { return PopularMoviesCardsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function PopularMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function PopularMoviesCardsComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function PopularMoviesCardsComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularMoviesCardsComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function PopularMoviesCardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function PopularMoviesCardsComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PopularMoviesCardsComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function PopularMoviesCardsComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function PopularMoviesCardsComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularMoviesCardsComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function PopularMoviesCardsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function PopularMoviesCardsComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PopularMoviesCardsComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class PopularMoviesCardsComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        // this.breakpointObserver
        //   .observe(['(min-width: 900px)'])
        //   .subscribe((state: BreakpointState) => {
        //     if (state.matches) {
        //       console.log('FetchData for larger screen');
        //       this.fetchData();
        //     }
        //     else {
        //       this.fetchSmallData();
        //       console.log('FetchData for SMALL screen');
        //     }
        //   });
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getPopularMovies().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getPopularMovies().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
PopularMoviesCardsComponent.ɵfac = function PopularMoviesCardsComponent_Factory(t) { return new (t || PopularMoviesCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
PopularMoviesCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularMoviesCardsComponent, selectors: [["app-popular-movies-cards"]], viewQuery: function PopularMoviesCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function PopularMoviesCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PopularMoviesCardsComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PopularMoviesCardsComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGFyLW1vdmllcy1jYXJkcy5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "JzRl":
/*!*********************************************************************!*\
  !*** ./src/app/components/similar-movie/similar-movie.component.ts ***!
  \*********************************************************************/
/*! exports provided: SimilarMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarMovieComponent", function() { return SimilarMovieComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["carousel"];
function SimilarMovieComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimilarMovieComponent_div_6_5_ng_template_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const m_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.navigateToDetails(m_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function SimilarMovieComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimilarMovieComponent_div_6_5_ng_template_0_div_1_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function SimilarMovieComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimilarMovieComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function SimilarMovieComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function SimilarMovieComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SimilarMovieComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function SimilarMovieComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimilarMovieComponent_div_7_6_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.navigateToDetails(m_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.title);
} }
function SimilarMovieComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimilarMovieComponent_div_7_6_ng_template_0_Template, 8, 2, "ng-template", 6);
} }
function SimilarMovieComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function SimilarMovieComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SimilarMovieComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class SimilarMovieComponent {
    constructor(postsService, breakpointObserver, route, router) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.router = router;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getSimilarMovies(this.id).subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getSimilarMovies(this.id).subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    navigateToDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/movie/" + id).then(() => {
            window.location.reload();
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
SimilarMovieComponent.ɵfac = function SimilarMovieComponent_Factory(t) { return new (t || SimilarMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SimilarMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimilarMovieComponent, selectors: [["app-similar-movie"]], viewQuery: function SimilarMovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "click"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function SimilarMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SimilarMovieComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SimilarMovieComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big && ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small && ctx.movieSmall.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1pbGFyLW1vdmllLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [2, "height", "30px", "vertical-align", "center"], [1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Powered by TMDB. Developed by Rong Wang.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .footer[_ngcontent-%COMP%]{\n            color:white;\n            font-size: 15px;\n            background-color: black;\n            text-align: center;\n        }"] });


/***/ }),

/***/ "SrzZ":
/*!*****************************************************************!*\
  !*** ./src/app/components/trending-tv/trending-tv.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrendingTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingTVComponent", function() { return TrendingTVComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "tv", a2]; };
function TrendingTVComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function TrendingTVComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingTVComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function TrendingTVComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingTVComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function TrendingTVComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TrendingTVComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TrendingTVComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function TrendingTVComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function TrendingTVComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingTVComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function TrendingTVComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TrendingTVComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TrendingTVComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class TrendingTVComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getTrendingTVs().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getTrendingTVs().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
TrendingTVComponent.ɵfac = function TrendingTVComponent_Factory(t) { return new (t || TrendingTVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TrendingTVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendingTVComponent, selectors: [["app-trending-tv"]], viewQuery: function TrendingTVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function TrendingTVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TrendingTVComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TrendingTVComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGluZy10di5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.title = 'frontend';
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TNoQ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recommended-movie/recommended-movie.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecommendedMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedMovieComponent", function() { return RecommendedMovieComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["carousel"];
function RecommendedMovieComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedMovieComponent_div_6_5_ng_template_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const m_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.navigateToDetails(m_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function RecommendedMovieComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedMovieComponent_div_6_5_ng_template_0_div_1_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function RecommendedMovieComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecommendedMovieComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function RecommendedMovieComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function RecommendedMovieComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecommendedMovieComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function RecommendedMovieComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedMovieComponent_div_7_6_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.navigateToDetails(m_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.title);
} }
function RecommendedMovieComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecommendedMovieComponent_div_7_6_ng_template_0_Template, 8, 2, "ng-template", 6);
} }
function RecommendedMovieComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function RecommendedMovieComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecommendedMovieComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class RecommendedMovieComponent {
    constructor(postsService, breakpointObserver, route, router) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.router = router;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getRecommendedMovies(this.id).subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getRecommendedMovies(this.id).subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    navigateToDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/movie/" + id).then(() => {
            window.location.reload();
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
RecommendedMovieComponent.ɵfac = function RecommendedMovieComponent_Factory(t) { return new (t || RecommendedMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RecommendedMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendedMovieComponent, selectors: [["app-recommended-movie"]], viewQuery: function RecommendedMovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "click"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function RecommendedMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecommendedMovieComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RecommendedMovieComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big && ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small && ctx.movieSmall.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1lbmRlZC1tb3ZpZS5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "XTth":
/*!***************************************************************!*\
  !*** ./src/app/components/similar-tv/similar-tv.component.ts ***!
  \***************************************************************/
/*! exports provided: SimilarTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarTVComponent", function() { return SimilarTVComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["carousel"];
function SimilarTVComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimilarTVComponent_div_6_5_ng_template_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const m_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.navigateToDetails(m_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function SimilarTVComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimilarTVComponent_div_6_5_ng_template_0_div_1_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function SimilarTVComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimilarTVComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function SimilarTVComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function SimilarTVComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SimilarTVComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function SimilarTVComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimilarTVComponent_div_7_6_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.navigateToDetails(m_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.title);
} }
function SimilarTVComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimilarTVComponent_div_7_6_ng_template_0_Template, 8, 2, "ng-template", 6);
} }
function SimilarTVComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function SimilarTVComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SimilarTVComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class SimilarTVComponent {
    constructor(postsService, breakpointObserver, route, router) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.router = router;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getSimilarTVs(this.id).subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getSimilarTVs(this.id).subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    navigateToDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/tv/" + id).then(() => {
            window.location.reload();
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
SimilarTVComponent.ɵfac = function SimilarTVComponent_Factory(t) { return new (t || SimilarTVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SimilarTVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimilarTVComponent, selectors: [["app-similar-tv"]], viewQuery: function SimilarTVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "click"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function SimilarTVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SimilarTVComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SimilarTVComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big && ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small && ctx.movieSmall.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1pbGFyLXR2LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "Y4i0":
/*!*****************************************************************************!*\
  !*** ./src/app/components/continue-watching/continue-watching.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContinueWatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueWatchingComponent", function() { return ContinueWatchingComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function ContinueWatchingComponent_div_8_5_ng_template_0_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
const _c2 = function (a2) { return ["watch", "tv", a2]; };
function ContinueWatchingComponent_div_8_5_ng_template_0_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function ContinueWatchingComponent_div_8_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContinueWatchingComponent_div_8_5_ng_template_0_div_1_a_1_Template, 6, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContinueWatchingComponent_div_8_5_ng_template_0_div_1_a_2_Template, 6, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", m_r8.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", m_r8.media_type == "tv");
} }
function ContinueWatchingComponent_div_8_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContinueWatchingComponent_div_8_5_ng_template_0_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function ContinueWatchingComponent_div_8_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContinueWatchingComponent_div_8_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function ContinueWatchingComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function ContinueWatchingComponent_div_8_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ContinueWatchingComponent_div_8_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function ContinueWatchingComponent_div_9_6_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r18.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r18.title);
} }
function ContinueWatchingComponent_div_9_6_ng_template_0_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, m_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r18.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r18.title);
} }
function ContinueWatchingComponent_div_9_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContinueWatchingComponent_div_9_6_ng_template_0_a_2_Template, 6, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContinueWatchingComponent_div_9_6_ng_template_0_a_3_Template, 6, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", m_r18.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", m_r18.media_type == "tv");
} }
function ContinueWatchingComponent_div_9_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContinueWatchingComponent_div_9_6_ng_template_0_Template, 4, 2, "ng-template", 6);
} }
function ContinueWatchingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 17, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function ContinueWatchingComponent_div_9_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContinueWatchingComponent_div_9_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
// import { watch } from 'node:fs';
class ContinueWatchingComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movieSmall = [];
        this.movies = [];
        this.watchlistArr = [];
    }
    ngOnInit() {
        // console.log(this.small);
        var watchlist = window.localStorage.getItem("continueWatching");
        var tempWatchlistArr = JSON.parse(watchlist || "[]");
        for (var i = tempWatchlistArr.length - 1; i >= 0; i--) { //reverse order
            if (tempWatchlistArr[i] != null && typeof (tempWatchlistArr[i]["poster_path"]) !== undefined && tempWatchlistArr[i]["poster_path"] !== null) {
                this.watchlistArr.push(tempWatchlistArr[i]);
            }
        }
        if (this.watchlistArr.length == 0) {
            this.storageLen = false;
        }
        else {
            this.storageLen = true;
            // this.movies = this.watchlistArr;
        }
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
        var cnt = Math.floor(continueLen / 6);
        // console.log("in continue the cnt is: " + cnt);
        // if(this.storageLen%6 != 0){
        //   cnt += 1;
        // }
        for (var i = 0; i < cnt; i++) {
            var tempArr = new Array();
            for (var j = 0; j < 6; j++) {
                tempArr.push(this.watchlistArr[i * 6 + j]);
            }
            this.movies.push(tempArr);
        }
        //最后一层不到六个
        if (cnt < 4 && cnt * 6 < continueLen) {
            var tempArr = new Array();
            for (var j = cnt * 6; j < continueLen; j++) {
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
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
ContinueWatchingComponent.ɵfac = function ContinueWatchingComponent_Factory(t) { return new (t || ContinueWatchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
ContinueWatchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContinueWatchingComponent, selectors: [["app-continue-watching"]], viewQuery: function ContinueWatchingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 10, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink", 4, "ngIf"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function ContinueWatchingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContinueWatchingComponent_div_8_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContinueWatchingComponent_div_9_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.storageLen == true && ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.storageLen == true && ctx.small == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250aW51ZS13YXRjaGluZy5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/firstpage/firstpage.component */ "xf2n");
/* harmony import */ var _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/secondpage/secondpage.component */ "bFZo");
/* harmony import */ var _components_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/commonpage/commonpage.component */ "IAgu");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_current_playing_carousel_current_playing_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/current-playing-carousel/current-playing-carousel.component */ "tfiG");
/* harmony import */ var _components_first_child_first_child_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/first-child/first-child.component */ "u2Nq");
/* harmony import */ var _components_popular_movies_cards_popular_movies_cards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/popular-movies-cards/popular-movies-cards.component */ "IxMW");
/* harmony import */ var _components_top_rated_movies_cards_top_rated_movies_cards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/top-rated-movies-cards/top-rated-movies-cards.component */ "ZuBq");
/* harmony import */ var _components_trending_movies_cards_trending_movies_cards_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/trending-movies-cards/trending-movies-cards.component */ "ivth");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/movie-cast/movie-cast.component */ "cORB");
/* harmony import */ var _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/movie-reviews/movie-reviews.component */ "6MaC");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/tv-details/tv-details.component */ "mv0o");
/* harmony import */ var _components_popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/popular-tv/popular-tv.component */ "rhcf");
/* harmony import */ var _components_top_rated_tv_top_rated_tv_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/top-rated-tv/top-rated-tv.component */ "E2p+");
/* harmony import */ var _components_trending_tv_trending_tv_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/trending-tv/trending-tv.component */ "SrzZ");
/* harmony import */ var _components_recommended_movie_recommended_movie_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/recommended-movie/recommended-movie.component */ "TNoQ");
/* harmony import */ var _components_recommended_tv_recommended_tv_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/recommended-tv/recommended-tv.component */ "ehQC");
/* harmony import */ var _components_similar_tv_similar_tv_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/similar-tv/similar-tv.component */ "XTth");
/* harmony import */ var _components_similar_movie_similar_movie_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/similar-movie/similar-movie.component */ "JzRl");
/* harmony import */ var _components_continue_watching_continue_watching_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/continue-watching/continue-watching.component */ "Y4i0");
/* harmony import */ var _components_tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/tv-cast/tv-cast.component */ "InEX");
/* harmony import */ var _components_tv_reviews_tv_reviews_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/tv-reviews/tv-reviews.component */ "Fv7f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");









// import { NgbdCarouselPause } from './carousel-pause';
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
        _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_11__["FirstpageComponent"],
        _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_12__["SecondpageComponent"],
        _components_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_13__["CommonpageComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
        _components_current_playing_carousel_current_playing_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CurrentPlayingCarouselComponent"],
        _components_first_child_first_child_component__WEBPACK_IMPORTED_MODULE_16__["FirstChildComponent"],
        _components_popular_movies_cards_popular_movies_cards_component__WEBPACK_IMPORTED_MODULE_17__["PopularMoviesCardsComponent"],
        _components_top_rated_movies_cards_top_rated_movies_cards_component__WEBPACK_IMPORTED_MODULE_18__["TopRatedMoviesCardsComponent"],
        _components_trending_movies_cards_trending_movies_cards_component__WEBPACK_IMPORTED_MODULE_19__["TrendingMoviesCardsComponent"],
        _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_20__["MovieDetailsComponent"],
        _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__["MovieCastComponent"],
        _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_22__["MovieReviewsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"],
        _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_25__["WatchlistComponent"],
        _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_26__["TvDetailsComponent"],
        _components_popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_27__["PopularTVComponent"],
        _components_top_rated_tv_top_rated_tv_component__WEBPACK_IMPORTED_MODULE_28__["TopRatedTVComponent"],
        _components_trending_tv_trending_tv_component__WEBPACK_IMPORTED_MODULE_29__["TrendingTVComponent"],
        _components_recommended_movie_recommended_movie_component__WEBPACK_IMPORTED_MODULE_30__["RecommendedMovieComponent"],
        _components_recommended_tv_recommended_tv_component__WEBPACK_IMPORTED_MODULE_31__["RecommendedTVComponent"],
        _components_similar_tv_similar_tv_component__WEBPACK_IMPORTED_MODULE_32__["SimilarTVComponent"],
        _components_similar_movie_similar_movie_component__WEBPACK_IMPORTED_MODULE_33__["SimilarMovieComponent"],
        _components_continue_watching_continue_watching_component__WEBPACK_IMPORTED_MODULE_34__["ContinueWatchingComponent"],
        _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__["NgbdModalContent"],
        _components_tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_35__["TvCastComponent"],
        _components_tv_reviews_tv_reviews_component__WEBPACK_IMPORTED_MODULE_36__["TvReviewsComponent"],
        _components_tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_35__["NgbdModalContentTV"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]] }); })();


/***/ }),

/***/ "ZuBq":
/*!***************************************************************************************!*\
  !*** ./src/app/components/top-rated-movies-cards/top-rated-movies-cards.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TopRatedMoviesCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedMoviesCardsComponent", function() { return TopRatedMoviesCardsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function TopRatedMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function TopRatedMoviesCardsComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopRatedMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function TopRatedMoviesCardsComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopRatedMoviesCardsComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function TopRatedMoviesCardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TopRatedMoviesCardsComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopRatedMoviesCardsComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function TopRatedMoviesCardsComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function TopRatedMoviesCardsComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopRatedMoviesCardsComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function TopRatedMoviesCardsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TopRatedMoviesCardsComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopRatedMoviesCardsComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class TopRatedMoviesCardsComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getTopRatedMovies().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getTopRatedMovies().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
TopRatedMoviesCardsComponent.ɵfac = function TopRatedMoviesCardsComponent_Factory(t) { return new (t || TopRatedMoviesCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TopRatedMoviesCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopRatedMoviesCardsComponent, selectors: [["app-top-rated-movies-cards"]], viewQuery: function TopRatedMoviesCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function TopRatedMoviesCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopRatedMoviesCardsComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopRatedMoviesCardsComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtcmF0ZWQtbW92aWVzLWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "bFZo":
/*!***************************************************************!*\
  !*** ./src/app/components/secondpage/secondpage.component.ts ***!
  \***************************************************************/
/*! exports provided: SecondpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageComponent", function() { return SecondpageComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["carousel"];
function SecondpageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function SecondpageComponent_9_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r7.title);
} }
function SecondpageComponent_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SecondpageComponent_9_ng_template_0_div_1_Template, 7, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r3);
} }
function SecondpageComponent_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SecondpageComponent_9_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
class SecondpageComponent {
    constructor() {
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        // console.log(this.small);
        if (window.localStorage.length == 0) {
            this.storageLen = false;
        }
        else {
            this.storageLen = true;
            this.movies = window.localStorage;
        }
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
SecondpageComponent.ɵfac = function SecondpageComponent_Factory(t) { return new (t || SecondpageComponent)(); };
SecondpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecondpageComponent, selectors: [["app-secondpage"]], viewQuery: function SecondpageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 10, vars: 5, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["style", "color:white; font-size:30px; text-align: center;", 4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], [2, "color", "white", "font-size", "30px", "text-align", "center"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"]], template: function SecondpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SecondpageComponent_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngb-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function SecondpageComponent_Template_ngb_carousel_slide_7_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SecondpageComponent_9_Template, 1, 0, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.storageLen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmRwYWdlLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:190px;\n            height: 265px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 255px;\n            left:-5px;\n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .text[_ngcontent-%COMP%]{\n            width:180px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "cORB":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-cast/movie-cast.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieCastComponent, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCastComponent", function() { return MovieCastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MovieCastComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieCastComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCastComponent_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const m_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.openModal(m_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r3.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r3.character);
} }
function MovieCastComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieCastComponent_div_9_div_1_Template, 10, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieCast);
} }
function NgbdModalContent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r2.birthday, "");
} }
function NgbdModalContent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r3.birthPlace, "");
} }
function NgbdModalContent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r4.gender, "");
} }
function NgbdModalContent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r5.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.homepage);
} }
function NgbdModalContent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r6.knownFor, "");
} }
function NgbdModalContent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r7.alsoKnownAs || "N/A", "");
} }
function NgbdModalContent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r8.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r9.ins_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r10.fb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r11.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgbdModalContent_div_7_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgbdModalContent_div_7_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgbdModalContent_div_7_div_5_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgbdModalContent_div_7_div_6_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgbdModalContent_div_7_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgbdModalContent_div_7_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NgbdModalContent_div_7_div_10_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NgbdModalContent_div_7_div_11_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NgbdModalContent_div_7_div_12_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NgbdModalContent_div_7_div_13_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.birthday != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.birthPlace != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gender != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.homepage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.knownFor != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alsoKnownAs != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.imdb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ins_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.fb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.twitter_id != "");
} }
function NgbdModalContent_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r12.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r13.ins_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_8_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r14.fb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_8_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r15.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgbdModalContent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NgbdModalContent_div_8_div_14_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NgbdModalContent_div_8_div_15_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NgbdModalContent_div_8_div_16_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NgbdModalContent_div_8_div_17_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r1.birthday || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r1.birthPlace || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r1.gender || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r1.knownFor || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r1.alsoKnownAs || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.imdb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ins_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.fb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.twitter_id != "");
} }
class MovieCastComponent {
    constructor(route, postsService, modalService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchCast();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchCast() {
        this.postsService.getMovieCast(this.id).subscribe(res => {
            this.movieCast = res;
            if (this.movieCast.length > 0) {
                this.hasCast = true;
            }
            else {
                this.hasCast = false;
            }
        });
    }
    // fetchCastDetail(person_id: string){ // the person id
    // }
    openModal(m) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.person_id = m.id;
            this.postsService.getCastDetail(m.id).subscribe(res => {
                this.castDetail = res;
                this.postsService.getCastDExternalID(m.id).subscribe(res => {
                    this.castExternalIds = res;
                    console.log(this.castExternalIds);
                    var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg', centered: true, scrollable: true });
                    modalRef.componentInstance.actorName = m.name;
                    modalRef.componentInstance.imgPath = m.profile_path;
                    modalRef.componentInstance.birthday = this.castDetail.birthday;
                    modalRef.componentInstance.birthPlace = this.castDetail.birthPlace;
                    modalRef.componentInstance.gender = this.castDetail.gender;
                    modalRef.componentInstance.homepage = this.castDetail.homegpage;
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
        });
    }
}
MovieCastComponent.ɵfac = function MovieCastComponent_Factory(t) { return new (t || MovieCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
MovieCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieCastComponent, selectors: [["app-movie-cast"]], decls: 10, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], [4, "ngIf"], ["class", "row flex-row flex-nowrap", "style", "background-color: #000033; overflow-x: scroll;", 4, "ngIf"], [1, "row", "flex-row", "flex-nowrap", 2, "background-color", "#000033", "overflow-x", "scroll"], ["class", "oneCard", "style", "width: 170px; margin:5px;", 4, "ngFor", "ngForOf"], [1, "oneCard", 2, "width", "170px", "margin", "5px"], [2, "width", "170px", "margin", "5px", 3, "click"], ["alt", "m.title", 1, "card-img-top", 2, "border-radius", "6% 6% 0 0", 3, "src"], [1, "card-body", 2, "background-color", "white", "border-radius", "0 0 6% 6%"], [2, "text-align", "center", "font-weight", "bold", "font-size", "15px"], [2, "text-align", "center", "font-weight", "bold", "font-size", "17px"], [2, "text-align", "center", "font-size", "15px"]], template: function MovieCastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MovieCastComponent_div_8_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MovieCastComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasCast == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasCast == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1jYXN0LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .row[_ngcontent-%COMP%]::-webkit-scrollbar {\n            width: 1em;\n            height: 6px;\n            border-radius: 3px;\n            background-color: #000033;\n            border: 1px solid darkgrey;\n        }   \n        .row[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        }\n        .row[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n            background-color: darkgrey;\n            outline: 1px solid slategrey;\n            border-radius: 3px;\n        }\n        .modal-dialog[_ngcontent-%COMP%] {\n            width: 1000px;\n        }\n        .modal-content[_ngcontent-%COMP%]{\n            width: 1000px;\n        }\n        .ngbd-modal-content[_ngcontent-%COMP%]{\n            width: 1000px;\n        }\n\n        \n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }\n        h2[_ngcontent-%COMP%]{\n            font-size: 20px; \n            font-style: italic;\n            color: silver;\n        }\n        h3[_ngcontent-%COMP%]{\n            font-size: 22px; \n            color: silver;\n        }\n        h4[_ngcontent-%COMP%]{\n            font-size: 13px; \n            font-weight: bold;\n            color: white;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        p[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }"] });
// the content of the modal
class NgbdModalContent {
    constructor(activeModal, modalService, breakpointObserver) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
NgbdModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], inputs: { actorName: "actorName", imgPath: "imgPath", birthday: "birthday", birthPlace: "birthPlace", gender: "gender", homepage: "homepage", knownFor: "knownFor", alsoKnownAs: "alsoKnownAs", biography: "biography", imdb_id: "imdb_id", ins_id: "ins_id", fb_id: "fb_id", twitter_id: "twitter_id" }, decls: 15, vars: 4, consts: [[1, "modal-header"], [1, "modal-title", 2, "font-size", "22px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [2, "width", "100%", "margin-left", "10px"], [2, "font-size", "24px"], [1, "row"], [2, "height", "220px", "width", "160px", "margin-left", "10px", "magin-right", "20px", 3, "src"], [2, "margin-left", "25px", "width", "70%"], [1, "row", 2, "margin-top", "10px"], ["target", "_blank", 3, "href"], ["target", "_blank", "ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", 2, "margin-left", "15px", 3, "href"], [1, "fa", "fa-imdb", 2, "font-size", "30px", "color", "#ffcc00"], ["target", "_blank", "ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-instagram", 2, "font-size", "30px", "color", "#990099"], ["target", "_blank", "ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "30px", "color", "#blue"], ["target", "_blank", "ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "30px", "color", "#deepskyblue"], [2, "height", "500px", "width", "340px", "margin-left", "10px", "magin-right", "20px", 3, "src"], [2, "margin-left", "10px", "width", "340px"], ["target", "_blank", "ngbPopove", "Visit Instagram", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], ["target", "_blank", "ngbPopove", "Visit Facebook", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"], ["target", "_blank", "ngbPopove", "Visit Twitter", "triggers", "mouseenter:mouseleave", 2, "margin-left", "10px", 3, "href"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgbdModalContent_div_7_Template, 14, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgbdModalContent_div_8_Template, 18, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.actorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.biography || "N/A");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopover"]], styles: [".my-custom-class[_ngcontent-%COMP%]{\n    background-color: white;\n  }\n  .my-custom-class[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    border: 1px silver solid;\n  }\n  .my-custom-class[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    border-top-color: #FFFAFA;\n  }"] });


/***/ }),

/***/ "ehQC":
/*!***********************************************************************!*\
  !*** ./src/app/components/recommended-tv/recommended-tv.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecommendedTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedTVComponent", function() { return RecommendedTVComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["carousel"];
function RecommendedTVComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedTVComponent_div_6_5_ng_template_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const m_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.navigateToDetails(m_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function RecommendedTVComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedTVComponent_div_6_5_ng_template_0_div_1_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function RecommendedTVComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecommendedTVComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function RecommendedTVComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function RecommendedTVComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecommendedTVComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function RecommendedTVComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedTVComponent_div_7_6_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.navigateToDetails(m_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.title);
} }
function RecommendedTVComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecommendedTVComponent_div_7_6_ng_template_0_Template, 8, 2, "ng-template", 6);
} }
function RecommendedTVComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function RecommendedTVComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecommendedTVComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class RecommendedTVComponent {
    constructor(postsService, breakpointObserver, route, router) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.router = router;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getRecommendedTVs(this.id).subscribe(res => {
            this.posts = res;
            // let R1 = [];
            // let R2 = [];
            // let R3 = [];
            // let R4 = [];
            // for(var i=0; i<this.posts.length;i++){
            //   if (i >= 0 && i < 6){
            //     R1.push(this.posts[i]);
            //   }
            //   if (i >= 6 && i < 12){
            //     R2.push(this.posts[i]);
            //   }
            //   if (i >= 12 && i < 18){
            //     R3.push(this.posts[i]);
            //   }
            //   if (i >= 18 && i < 24){
            //     R4.push(this.posts[i]);
            //   } 
            // }
            // this.movies.push(R1);
            // this.movies.push(R2);
            // this.movies.push(R3);
            // this.movies.push(R4);
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            // console.log("in continue the cnt is: " + cnt);
            // if(this.storageLen%6 != 0){
            //   cnt += 1;
            // }
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getRecommendedTVs(this.id).subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    navigateToDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/tv/" + id).then(() => {
            window.location.reload();
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
RecommendedTVComponent.ɵfac = function RecommendedTVComponent_Factory(t) { return new (t || RecommendedTVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RecommendedTVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendedTVComponent, selectors: [["app-recommended-tv"]], viewQuery: function RecommendedTVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "click"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function RecommendedTVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecommendedTVComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RecommendedTVComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big && ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small && ctx.movieSmall.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1lbmRlZC10di5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NavBarComponent_ng_template_23_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_ng_template_23_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const r_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().result; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.navigateToMovieDetails(r_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-highlight", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const r_r2 = ctx_r9.result;
    const t_r3 = ctx_r9.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
function NavBarComponent_ng_template_23_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_ng_template_23_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const r_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().result; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.navigateToTVDetails(r_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-highlight", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const r_r2 = ctx_r13.result;
    const t_r3 = ctx_r13.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
function NavBarComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavBarComponent_ng_template_23_a_0_Template, 4, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavBarComponent_ng_template_23_a_1_Template, 4, 3, "a", 16);
} if (rf & 2) {
    const r_r2 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", r_r2.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", r_r2.media_type == "tv");
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["nav-active"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["mylist"]; };
class NavBarComponent {
    // search: OperatorFunction<string, readonly {id:number, title:string, backdrop_path:string, media_type:string}[]> = (text$: Observable<string>) =>
    //   text$.pipe(
    //     debounceTime(200),
    //     map(term => term === '' ? []
    //       : statesWithFlags.filter(v => v.title.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 7))
    //   )
    // formatter = (x: {title: string}) => x.title;
    constructor(postsService, breakpointObserver, router) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        // Step 1:
        // Create a property to track whether the menu is open.
        // Start with the menu collapsed so that it does not
        // appear initially when the page loads on a small screen!
        this.isMenuCollapsed = true;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => term === '' ? []
            : this.postsService.getMultiSearch(term).pipe()));
        this.formatter = (x) => x.name;
    }
    navigateToMovieDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/movie/" + id).then(() => {
            window.location.reload();
        });
    }
    navigateToTVDetails(id) {
        // console.log("Clicked");
        this.router.navigateByUrl("/watch/tv/" + id).then(() => {
            window.location.reload();
        });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 27, vars: 19, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "mb-3", 2, "background-color", "black"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", "text-right", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "click"], [1, "sr-only"], ["rel", "nofollow noopener noreferrer", 1, "nav-link", "text-right", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "click"], ["rt", ""], [1, "form-inline", "my-2", "my-lg-0"], ["id", "typeahead-template", "type", "text", "name", "justARandomName", "placeholder", "Search", 1, "form-control", 2, "background-color", "black", "color", "white", "outline", "none", "border-bottom-color", "white", "border-top-color", "black", "border-left-color", "black", "border-right-color", "black", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], ["rel", "nofollow noopener noreferrer", 3, "click", 4, "ngIf"], ["rel", "nofollow noopener noreferrer", 3, "click"], [2, "position", "relative", "left", "-15px"], [1, "mr-1", 2, "width", "60px", 3, "src"], [2, "color", "white", "margin-left", "10px", 3, "result", "term"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_11_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_16_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_21_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavBarComponent_ng_template_23_Template, 2, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavBarComponent_Template_input_ngModelChange_26_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        \n          #ngb-typeahead-0{\n            background-color:#000033;\n        }\n          .dropdown-item{\n            margin: 0;\n            padding:0px;\n            border: 1px;\n        }\n\n          .dropdown-menu{\n            margin: 0;\n            padding:0px;\n            border: 1px;\n        }"] });


/***/ }),

/***/ "ivth":
/*!*************************************************************************************!*\
  !*** ./src/app/components/trending-movies-cards/trending-movies-cards.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrendingMoviesCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingMoviesCardsComponent", function() { return TrendingMoviesCardsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function TrendingMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function TrendingMoviesCardsComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingMoviesCardsComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function TrendingMoviesCardsComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingMoviesCardsComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function TrendingMoviesCardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TrendingMoviesCardsComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TrendingMoviesCardsComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function TrendingMoviesCardsComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function TrendingMoviesCardsComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingMoviesCardsComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function TrendingMoviesCardsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function TrendingMoviesCardsComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TrendingMoviesCardsComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class TrendingMoviesCardsComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getTrendingMovies().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getTrendingMovies().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
TrendingMoviesCardsComponent.ɵfac = function TrendingMoviesCardsComponent_Factory(t) { return new (t || TrendingMoviesCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TrendingMoviesCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendingMoviesCardsComponent, selectors: [["app-trending-movies-cards"]], viewQuery: function TrendingMoviesCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function TrendingMoviesCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TrendingMoviesCardsComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TrendingMoviesCardsComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGluZy1tb3ZpZXMtY2FyZHMuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // for currently playing watching
    getAllPosts() {
        let url = "http://localhost:8080/currentPlayingMovies";
        return this.httpClient.get(url); // return the response
    }
    // for popular movies, trending movies, top rated movies.
    getPopularMovies() {
        let url = "http://localhost:8080/popularMovies";
        return this.httpClient.get(url); // return the response
    }
    getTrendingMovies() {
        let url = "http://localhost:8080/trendingMovies/";
        return this.httpClient.get(url); // return the response
    }
    getTopRatedMovies() {
        let url = "http://localhost:8080/topRatedMovies/";
        return this.httpClient.get(url); // return the response
    }
    getMovieDetails(id) {
        let url = "http://localhost:8080/movieDetails/" + id;
        return this.httpClient.get(url); // return the response
    }
    getMovieVideo(id) {
        let url = "http://localhost:8080/movieVideo/" + id;
        return this.httpClient.get(url); // return the response
    }
    getMovieCast(id) {
        let url = "http://localhost:8080/movieCast/" + id;
        return this.httpClient.get(url); // return the response
    }
    getMovieReview(id) {
        let url = "http://localhost:8080/movieReview/" + id;
        return this.httpClient.get(url); // return the response
    }
    getCastDetail(person_id) {
        let url = "http://localhost:8080/castDetail/" + person_id;
        return this.httpClient.get(url);
    }
    getCastDExternalID(person_id) {
        let url = "http://localhost:8080/castExternalId/" + person_id;
        return this.httpClient.get(url);
    }
    getRecommendedMovies(id) {
        let url = "http://localhost:8080/recommendedMovies/" + id;
        return this.httpClient.get(url); // return the response
    }
    getSimilarMovies(id) {
        let url = "http://localhost:8080/similarMovies/" + id;
        return this.httpClient.get(url); // return the response
    }
    getMultiSearch(term) {
        let url = "http://localhost:8080/multiSearch/" + term;
        return this.httpClient.get(url);
    }
    //TV
    // for popular movies, trending movies, top rated movies.
    getPopularTVs() {
        let url = "http://localhost:8080/popularTVs";
        return this.httpClient.get(url); // return the response
    }
    getTrendingTVs() {
        let url = "http://localhost:8080/trendingTVs/";
        return this.httpClient.get(url); // return the response
    }
    getTopRatedTVs() {
        let url = "http://localhost:8080/topRatedTVs/";
        return this.httpClient.get(url); // return the response
    }
    getTVDetails(id) {
        let url = "http://localhost:8080/tvDetails/" + id;
        return this.httpClient.get(url); // return the response
    }
    getTVVideo(id) {
        let url = "http://localhost:8080/tvVideo/" + id;
        return this.httpClient.get(url); // return the response
    }
    getTVCast(id) {
        let url = "http://localhost:8080/tvCast/" + id;
        return this.httpClient.get(url); // return the response
    }
    getTVReview(id) {
        let url = "http://localhost:8080/tvReview/" + id;
        return this.httpClient.get(url); // return the response
    }
    getRecommendedTVs(id) {
        let url = "http://localhost:8080/recommendedTVs/" + id;
        return this.httpClient.get(url); // return the response
    }
    getSimilarTVs(id) {
        let url = "http://localhost:8080/similarTVs/" + id;
        return this.httpClient.get(url); // return the response
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _current_playing_carousel_current_playing_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current-playing-carousel/current-playing-carousel.component */ "tfiG");
/* harmony import */ var _continue_watching_continue_watching_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../continue-watching/continue-watching.component */ "Y4i0");
/* harmony import */ var _popular_movies_cards_popular_movies_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popular-movies-cards/popular-movies-cards.component */ "IxMW");
/* harmony import */ var _top_rated_movies_cards_top_rated_movies_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-rated-movies-cards/top-rated-movies-cards.component */ "ZuBq");
/* harmony import */ var _trending_movies_cards_trending_movies_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trending-movies-cards/trending-movies-cards.component */ "ivth");
/* harmony import */ var _popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popular-tv/popular-tv.component */ "rhcf");
/* harmony import */ var _top_rated_tv_top_rated_tv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../top-rated-tv/top-rated-tv.component */ "E2p+");
/* harmony import */ var _trending_tv_trending_tv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../trending-tv/trending-tv.component */ "SrzZ");










// import { watch } from 'node:fs';
// import { windowWhen } from 'rxjs/operators';
class HomepageComponent {
    //public category: any;
    // public watchlist=[];
    // public continueWatch=[];
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        //this.category = this.route.snapshot.paramMap.get("category"); // get the category value from the url??
        // window.localStorage.clear();
        // window.localStorage.setItem("watchlist", "");
        // window.localStorage.setItem("continueWatch", "");
        // console.log(window.localStorage);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 25, vars: 0, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-current-playing-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-continue-watching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-popular-movies-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-top-rated-movies-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-trending-movies-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-popular-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-top-rated-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-trending-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_current_playing_carousel_current_playing_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CurrentPlayingCarouselComponent"], _continue_watching_continue_watching_component__WEBPACK_IMPORTED_MODULE_3__["ContinueWatchingComponent"], _popular_movies_cards_popular_movies_cards_component__WEBPACK_IMPORTED_MODULE_4__["PopularMoviesCardsComponent"], _top_rated_movies_cards_top_rated_movies_cards_component__WEBPACK_IMPORTED_MODULE_5__["TopRatedMoviesCardsComponent"], _trending_movies_cards_trending_movies_cards_component__WEBPACK_IMPORTED_MODULE_6__["TrendingMoviesCardsComponent"], _popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_7__["PopularTVComponent"], _top_rated_tv_top_rated_tv_component__WEBPACK_IMPORTED_MODULE_8__["TopRatedTVComponent"], _trending_tv_trending_tv_component__WEBPACK_IMPORTED_MODULE_9__["TrendingTVComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        \n        \n        [_ngcontent-%COMP%]::-webkit-scrollbar {\n        width: 5px;\n        height: 5px;\n        }\n        \n        [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 5px grey;\n        border-radius: 10px;\n        }\n        \n        [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n        background: darkgrey;\n        border-radius: 10px;\n        }\n        \n        [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n        background: gray;\n        }"] });


/***/ }),

/***/ "mv0o":
/*!***************************************************************!*\
  !*** ./src/app/components/tv-details/tv-details.component.ts ***!
  \***************************************************************/
/*! exports provided: TvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailsComponent", function() { return TvDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tv-cast/tv-cast.component */ "InEX");
/* harmony import */ var _tv_reviews_tv_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tv-reviews/tv-reviews.component */ "Fv7f");
/* harmony import */ var _recommended_tv_recommended_tv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../recommended-tv/recommended-tv.component */ "ehQC");
/* harmony import */ var _similar_tv_similar_tv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../similar-tv/similar-tv.component */ "XTth");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













const _c0 = ["selfClosingAlert"];
function TvDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.movieVideo.key);
} }
function TvDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r1.movieVideo.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 180)("width", 325);
} }
function TvDetailsComponent_div_17_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.movieDetails == null ? null : ctx_r4.movieDetails.title);
} }
function TvDetailsComponent_div_17_ngb_alert_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailsComponent_div_17_ngb_alert_24_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r5.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.successMessage, " ");
} }
function TvDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_div_17_h1_2_Template, 2, 1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailsComponent_div_17_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.addOrRemoveWatchList(ctx_r9.movieDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TvDetailsComponent_div_17_ngb_alert_24_Template, 3, 2, "ngb-alert", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.movieDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.release_year, " | \u2605 ", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.vote_average, " | ", ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.runtime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.spoken_languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.successMessage);
} }
function TvDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.movieDetails.overview);
} }
class TvDetailsComponent {
    constructor(route, postsService, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.continueWatch = [];
        this.watchlist = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        console.log("IN oninit tv details! ");
        this.fetchDetails();
        console.log("tv details! Bwtween fetchDetails and fetchVideo");
        this.fetchVideo();
        //check if should display Add to Watchlist or Remove from Watchlist
        this.buttonText = "Add to Watchlist";
        var localMovieString = window.localStorage.getItem("watchlist");
        var curLocal = JSON.parse(localMovieString || '[]');
        for (var i = 0; i < curLocal.length; i++) {
            if (curLocal[i] != null && curLocal[i]["id"] == this.id) { //  this id is in the watchlist
                this.buttonText = "Remove from Watchlist";
                break;
            }
        }
        console.log("TV Details: OnInit, before breakpoint. ");
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchDetails() {
        console.log("TV Details: in fetchDetails ");
        this.postsService.getTVDetails(this.id).subscribe(res => {
            // console.log("IN TV details Beginning! ");
            this.movieDetails = res;
            this.twitterShareText = (this.movieDetails.twitterText); //.concat(this.movieVideo.twitterURL);
            // console.log(this.twitterShareText);
            // add to continue watching
            if (typeof (this.movieDetails.poster_path) !== "undefined" || this.movieDetails.poster_path !== null) {
                var ContinueWatchingString = window.localStorage.getItem("continueWatching");
                var continueWatchingArr = JSON.parse(ContinueWatchingString || '[]');
                var newContinueArr = new Array();
                for (var i = 0; i < continueWatchingArr.length; i++) {
                    if (continueWatchingArr[i] != null && continueWatchingArr[i]["id"] != this.id) { //  this id is in the watchlist
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
            // console.log("TV details! ");
            // console.log("TV details! " + this.movieDetails);
        });
    }
    fetchVideo() {
        this.postsService.getTVVideo(this.id).subscribe(res => {
            this.movieVideo = res;
            this.twitterShareText += this.movieVideo.twitterURL; // add the video link and hashtag
            this.FBShareText = "https://www.facebook.com/sharer/sharer.php?u=" + this.movieVideo["FBURL"];
        });
    }
    fetchCast() {
        this.postsService.getTVCast(this.id).subscribe(res => {
            this.movieCast = res;
        });
    }
    addOrRemoveWatchList(clickedMovieDetails) {
        // make the alert disappear after 5 seconds, or closed by the user.
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        if (this.buttonText == "Add to Watchlist") { // means clicked on add to the watchlist
            // this.watchlist = JSON.parse(window.localStorage.getItem('watchlist'));
            if (window.localStorage.getItem("watchlist") == "") {
                var newMovie = new Array();
                newMovie.push(clickedMovieDetails);
                window.localStorage.setItem("watchlist", JSON.stringify(newMovie));
                console.log("empty");
            }
            else { // already has some movies in it
                var localMovieString = window.localStorage.getItem("watchlist");
                var curLocal = JSON.parse(localMovieString || '[]');
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
        else if (this.buttonText == "Remove from Watchlist") {
            // window.localStorage.removeItem(clickedMovieDetails.title);
            var localMovieString = window.localStorage.getItem("watchlist");
            var curLocal = JSON.parse(localMovieString || '{}');
            for (var i = 0; i < curLocal.length; i++) {
                if (curLocal[i] != null && curLocal[i]["id"] == clickedMovieDetails["id"]) {
                    console.log("in the if!!!!");
                    delete curLocal[i];
                }
            }
            if (curLocal.length == 0) {
                window.localStorage.setItem("watchlist", "");
            }
            else {
                window.localStorage.setItem("watchlist", JSON.stringify(curLocal));
            }
            this.buttonText = "Add to Watchlist";
            this.alertType = "danger"; // red
            this._success.next(`Removed from watchlist.`);
            console.log("Removed!!");
            console.log(localStorage);
        }
    }
}
TvDetailsComponent.ɵfac = function TvDetailsComponent_Factory(t) { return new (t || TvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
TvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TvDetailsComponent, selectors: [["app-tv-details"]], viewQuery: function TvDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 46, vars: 6, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["property", "og:url", "content", "https://www.your-domain.com/your-page.html"], ["property", "og:type", "content", "website"], ["property", "og:title", "content", "Your Website Title"], ["property", "og:description", "content", "Your description"], ["property", "og:image", "content", "https://www.your-domain.com/path/image.jpg"], [2, "margin-left", "15%", "width", "70%", "margin-top", "10%"], [1, "row"], ["style", "width: 60%; height: 50%; margin-right: 5%;", 4, "ngIf"], ["style", "margin-right: 2%;", 4, "ngIf"], ["style", "width: 350px;", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "30px", "margin-right", "5px"], ["target", "_blank", "data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button_count", 1, "fb-share-button", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "30px"], [2, "width", "60%", "height", "50%", "margin-right", "5%"], [3, "videoId"], [2, "margin-right", "2%"], [3, "videoId", "height", "width"], [2, "width", "350px"], [1, "span_title"], [1, "span_text"], ["id", "Btn", "ng-model", "WLBtn", 1, "watchListButton", 2, "outline", "none", 3, "click"], ["style", " margin-top: 10px; font-size: 16px;", 3, "type", "closed", 4, "ngIf"], [2, "margin-top", "10px", "font-size", "16px", 3, "type", "closed"], ["selfClosingAlert", ""], [2, "text-align", "justify"]], template: function TvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "meta", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "meta", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TvDetailsComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TvDetailsComponent_div_16_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TvDetailsComponent_div_17_Template, 25, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TvDetailsComponent_div_22_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-tv-cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "app-tv-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-recommended-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-similar-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieVideo && ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieVideo && ctx.small == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.twitterShareText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.FBShareText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_7__["TvCastComponent"], _tv_reviews_tv_reviews_component__WEBPACK_IMPORTED_MODULE_8__["TvReviewsComponent"], _recommended_tv_recommended_tv_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedTVComponent"], _similar_tv_similar_tv_component__WEBPACK_IMPORTED_MODULE_10__["SimilarTVComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0di1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        h1[_ngcontent-%COMP%]{\n            font-size: 40px; \n            color: white;\n        }\n        h2[_ngcontent-%COMP%]{\n            font-size: 20px; \n            font-style: italic;\n            color: silver;\n        }\n        h3[_ngcontent-%COMP%]{\n            font-size: 22px; \n            color: silver;\n        }\n        h4[_ngcontent-%COMP%]{\n            font-size: 13px; \n            font-weight: bold;\n            color: white;\n        }\n        h5[_ngcontent-%COMP%]{\n            font-size: 20px; \n            \n            color: white;\n        }\n        p[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }\n        .span_title[_ngcontent-%COMP%]{\n            font-size: 16px; \n            \n            color: white;\n        }\n        .span_text[_ngcontent-%COMP%]{\n            font-size: 18px; \n            color: silver;\n        }\n        .watchListButton[_ngcontent-%COMP%]{\n            width: 200px;\n            height:40px;\n            background-color: DodgerBlue;\n            color:white;\n            font-size: 18px;\n            border:none;\n            border-radius: 3px;\n            margin-top: 5px;\n        }"] });


/***/ }),

/***/ "rhcf":
/*!***************************************************************!*\
  !*** ./src/app/components/popular-tv/popular-tv.component.ts ***!
  \***************************************************************/
/*! exports provided: PopularTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularTVComponent", function() { return PopularTVComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "tv", a2]; };
function PopularTVComponent_div_6_5_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r8.title);
} }
function PopularTVComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularTVComponent_div_6_5_ng_template_0_div_1_Template, 7, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mvs_r4);
} }
function PopularTVComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularTVComponent_div_6_5_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function PopularTVComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function PopularTVComponent_div_6_Template_ngb_carousel_slide_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PopularTVComponent_div_6_5_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
} }
function PopularTVComponent_div_7_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, m_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", m_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r14.title);
} }
function PopularTVComponent_div_7_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularTVComponent_div_7_6_ng_template_0_Template, 8, 5, "ng-template", 6);
} }
function PopularTVComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 16, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function PopularTVComponent_div_7_Template_ngb_carousel_slide_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PopularTVComponent_div_7_6_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movieSmall);
} }
class PopularTVComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movies = [];
        this.movieSmall = [];
    }
    ngOnInit() {
        // this.breakpointObserver
        //   .observe(['(min-width: 900px)'])
        //   .subscribe((state: BreakpointState) => {
        //     if (state.matches) {
        //       console.log('FetchData for larger screen');
        //       this.fetchData();
        //     }
        //     else {
        //       this.fetchSmallData();
        //       console.log('FetchData for SMALL screen');
        //     }
        //   });
        this.fetchData();
        this.fetchSmallData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getPopularTVs().subscribe(res => {
            this.posts = res;
            var resLen = Math.min(this.posts.length, 24);
            var cnt = Math.floor(resLen / 6);
            for (var i = 0; i < cnt; i++) {
                var tempArr = new Array();
                for (var j = 0; j < 6; j++) {
                    tempArr.push(this.posts[i * 6 + j]);
                }
                this.movies.push(tempArr);
            }
            //最后一层不到六个
            if (cnt < 4 && cnt * 6 < resLen) {
                var tempArr = new Array();
                for (var j = cnt * 6; j < resLen; j++) {
                    tempArr.push(this.posts[j]);
                }
                this.movies.push(tempArr);
            }
        });
    }
    fetchSmallData() {
        this.postsService.getPopularTVs().subscribe(res => {
            this.m = res;
            for (var i = 0; i < this.m.length; i++) {
                this.movieSmall.push(this.m[i]);
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
PopularTVComponent.ɵfac = function PopularTVComponent_Factory(t) { return new (t || PopularTVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
PopularTVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularTVComponent, selectors: [["app-popular-tv"]], viewQuery: function PopularTVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 8, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "150px", "border", "0", "outline", "none"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "margin-left", "80px"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"]], template: function PopularTVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PopularTVComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PopularTVComponent_div_7_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGFyLXR2LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "tfiG":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-playing-carousel/current-playing-carousel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CurrentPlayingCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPlayingCarouselComponent", function() { return CurrentPlayingCarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = function (a2) { return ["watch", "movie", a2]; };
function CurrentPlayingCarouselComponent_div_7_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, post_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r4.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r4.title);
} }
function CurrentPlayingCarouselComponent_div_7_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrentPlayingCarouselComponent_div_7_3_ng_template_0_Template, 7, 5, "ng-template", 6);
} }
function CurrentPlayingCarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CurrentPlayingCarouselComponent_div_7_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CurrentPlayingCarouselComponent_div_7_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
function CurrentPlayingCarouselComponent_div_8_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, post_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r12.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r12.title);
} }
function CurrentPlayingCarouselComponent_div_8_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrentPlayingCarouselComponent_div_8_3_ng_template_0_Template, 7, 5, "ng-template", 6);
} }
function CurrentPlayingCarouselComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 13, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CurrentPlayingCarouselComponent_div_8_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CurrentPlayingCarouselComponent_div_8_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
} }
// export class CurrentPlayingCarouselComponent implements OnInit {
class CurrentPlayingCarouselComponent {
    constructor(postsService, breakpointObserver) {
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.fetchData();
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
    fetchData() {
        this.postsService.getAllPosts().subscribe(res => {
            this.posts = res;
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
CurrentPlayingCarouselComponent.ɵfac = function CurrentPlayingCarouselComponent_Factory(t) { return new (t || CurrentPlayingCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
CurrentPlayingCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrentPlayingCarouselComponent, selectors: [["app-current-playing-carousel"]], viewQuery: function CurrentPlayingCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 10, vars: 2, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], [4, "ngIf"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [2, "background-color", "#000033"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], ["id", "croppedImgDiv", 1, "carousel-container"], ["alt", "post.title", 2, "width", "1150px", "height", "500px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "outline", "none", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], ["id", "croppedImgDivSmall", 1, "carousel-container"], ["alt", "post.title", 2, "width", "360px", "height", "200px", 3, "src"], [1, "movieTitleSmall"], [1, "textSmall"]], template: function CurrentPlayingCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CurrentPlayingCarouselComponent_div_7_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CurrentPlayingCarouselComponent_div_8_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.small == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW50LXBsYXlpbmctY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.05);\n\t\t}\n\t\t#croppedImgDiv[_ngcontent-%COMP%] {\n\t\t\t\n\t\t\toverflow: hidden;\n\t\t\t\n\t\t\twidth: 80%; \n\t\t\theight: 400px;\n\t\t\t\n\t\t\tmargin-left: 10%; \n\t\t}\n\t\t.movieTitle[_ngcontent-%COMP%]{\n            width:1150px; \n\t\t\theight: 300px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 400px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n\t\t.text[_ngcontent-%COMP%]{\n            color:white;\n            position: absolute;\n            left: 40px;\n            bottom: 40px;\n        }\n\n\t\t#croppedImgDivSmall[_ngcontent-%COMP%] {\n\t\t\t\n\t\t\toverflow: hidden;\n\t\t\t\n\t\t\twidth: 80%; \n\t\t\theight: 200px;\n\t\t\t\n\t\t\tmargin-left: 10%; \n\t\t}\n\t\t.movieTitleSmall[_ngcontent-%COMP%]{\n            width:360px; \n\t\t\theight: 180px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 180px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n\t\t.textSmall[_ngcontent-%COMP%]{\n            color:white;\n            position: absolute;\n            left: 20px;\n            bottom: 20px;\n        }"] });


/***/ }),

/***/ "u2Nq":
/*!*****************************************************************!*\
  !*** ./src/app/components/first-child/first-child.component.ts ***!
  \*****************************************************************/
/*! exports provided: FirstChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstChildComponent", function() { return FirstChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FirstChildComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstChildComponent.ɵfac = function FirstChildComponent_Factory(t) { return new (t || FirstChildComponent)(); };
FirstChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstChildComponent, selectors: [["app-first-child"]], decls: 2, vars: 0, template: function FirstChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "first-child works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdC1jaGlsZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/firstpage/firstpage.component */ "xf2n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/secondpage/secondpage.component */ "bFZo");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tv-details/tv-details.component */ "mv0o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    {
        path: 'watch/movie',
        children: [
            { path: '', component: _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_1__["FirstpageComponent"] },
            { path: ':id', component: _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"] } // for movie details, movie id
            // {path:':id/../../../watch/movie:id', component: MovieDetailsComponent} 
        ]
    },
    {
        path: 'watch/tv',
        children: [
            { path: '', component: _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_3__["SecondpageComponent"] },
            { path: ':id', component: _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_6__["TvDetailsComponent"] } // for movie details, movie id
        ]
    },
    { path: 'mylist', component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_5__["WatchlistComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xf2n":
/*!*************************************************************!*\
  !*** ./src/app/components/firstpage/firstpage.component.ts ***!
  \*************************************************************/
/*! exports provided: FirstpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstpageComponent", function() { return FirstpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonpage/commonpage.component */ "IAgu");


class FirstpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstpageComponent.ɵfac = function FirstpageComponent_Factory(t) { return new (t || FirstpageComponent)(); };
FirstpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstpageComponent, selectors: [["app-firstpage"]], decls: 3, vars: 0, template: function FirstpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "firstpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-commonpage");
    } }, directives: [_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_1__["CommonpageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zcMl":
/*!*************************************************************!*\
  !*** ./src/app/components/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function WatchlistComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a3) { return ["../", "watch", "movie", a3]; };
function WatchlistComponent_div_12_div_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, m_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", m_r9.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r9.title);
} }
const _c1 = function (a3) { return ["../", "watch", "tv", a3]; };
function WatchlistComponent_div_12_div_3_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, m_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", m_r9.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r9.title);
} }
function WatchlistComponent_div_12_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_12_div_3_div_2_a_1_Template, 6, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_12_div_3_div_2_a_2_Template, 6, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r9.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r9.media_type == "tv");
} }
function WatchlistComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_12_div_3_div_2_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mvs_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mvs_r6);
} }
function WatchlistComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchlistComponent_div_12_div_3_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_12_div_4_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.CntEnough == false);
} }
function WatchlistComponent_div_13_div_4_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, m_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16.title);
} }
function WatchlistComponent_div_13_div_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, m_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", m_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16.title);
} }
function WatchlistComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchlistComponent_div_13_div_4_a_3_Template, 6, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_13_div_4_a_4_Template, 6, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.media_type == "tv");
} }
function WatchlistComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_13_div_4_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchlistComponent_div_13_div_5_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.movieSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.CntEnoughSmall == false);
} }
// import { watch } from 'node:fs';
class WatchlistComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.movieSmall = [];
        this.CntEnough = true;
        this.CntEnoughSmall = true;
        this.movies = [];
        this.watchlistArr = [];
    }
    ngOnInit() {
        // console.log(this.small);
        var watchlist = window.localStorage.getItem("watchlist");
        var tempWatchlistArr = JSON.parse(watchlist || "[]");
        for (var i = tempWatchlistArr.length - 1; i >= 0; i--) {
            if (tempWatchlistArr[i] != null && typeof (tempWatchlistArr[i]["poster_path"]) !== undefined && tempWatchlistArr[i]["poster_path"] !== null) {
                this.watchlistArr.push(tempWatchlistArr[i]);
            }
        }
        if (this.watchlistArr.length == 0) {
            this.storageLen = false;
        }
        else {
            this.storageLen = true;
            // this.movies = this.watchlistArr;
        }
        if (this.watchlistArr.length <= 6) {
            this.CntEnough = false;
        }
        if (this.watchlistArr.length <= 1) {
            this.CntEnoughSmall = false;
        }
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .subscribe((state) => {
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
        var cnt = Math.floor(this.watchlistArr.length / 6);
        // if(this.storageLen%6 != 0){
        //   cnt += 1;
        // }
        for (var i = 0; i < cnt; i++) {
            var tempArr = new Array();
            for (var j = 0; j < 6; j++) {
                tempArr.push(this.watchlistArr[i * 6 + j]);
            }
            this.movies.push(tempArr);
        }
        //最后一层不到六个
        var tempArr = new Array();
        for (var j = cnt * 6; j < this.watchlistArr.length; j++) {
            console.log("j: " + j);
            tempArr.push(this.watchlistArr[j]);
        }
        if (tempArr != []) { // not empty
            this.movies.push(tempArr);
        }
        console.log("cnt: " + cnt);
        console.log("movies in watchlist.");
        console.log(this.movies);
        this.movieSmall = this.watchlistArr;
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 14, vars: 4, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["style", "color:white; font-size:30px; text-align: center; height: 650px;", 4, "ngIf"], ["style", "color:white; font-size:30px; text-align: center; height: 621px;", 4, "ngIf"], [4, "ngIf"], [2, "color", "white", "font-size", "30px", "text-align", "center", "height", "650px"], [2, "color", "white", "font-size", "30px", "text-align", "center", "height", "621px"], [4, "ngFor", "ngForOf"], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "140px", "border", "0", "outline", "none", "width", "1400px"], ["class", "oneCard", 4, "ngFor", "ngForOf"], [1, "oneCard"], ["rel", "nofollow noopener noreferrer", 3, "routerLink", 4, "ngIf"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "picsum-img-wrapper", 2, "height", "270px", "width", "170px"], ["alt", "m.title", 1, "card-img-top", 2, "width", "170px", 3, "src"], [1, "movieTitle"], [1, "text"], [2, "height", "260px"], [2, "margin-left", "80px"], ["ngbSlide", "", 4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-deck", 2, "background-color", "#000033", "padding-left", "100px", "border", "0", "outline", "none"], [1, "smallMovieTitle"], [2, "height", "202px"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WatchlistComponent_div_10_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WatchlistComponent_div_11_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WatchlistComponent_div_12_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchlistComponent_div_13_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageLen == false && ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageLen == false && ctx.small == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageLen == true && ctx.big == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageLen == true && ctx.small == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXRjaGxpc3QuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n            background: #000033;\n            font-family: \"Times New Roman\", Times, serif;\n        }\n        .carousel-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\t\t\ttransform: scale(1.05);\n\t\t}\n        div.oneCard[_ngcontent-%COMP%]{\n            margin: 12px 12px 12px 12px;\n            padding-bottom: 40px;\n        }\n        div.oneCard[_ngcontent-%COMP%]:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n        h1[_ngcontent-%COMP%]{\n            color: white;\n            margin-left: 120px;\n        }\n        .movieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 0;\n        }\n        .movieTitle[_ngcontent-%COMP%]:hover{\n\t\t\t\n            opacity: 1;\n\t\t}\n        .smallMovieTitle[_ngcontent-%COMP%]{\n            width:170px;\n            height: 245px;\n            \n            background: linear-gradient(to top, black, rgba(133, 108, 108, 0));\n            color:white;\n            position: relative;\n            bottom: 245px;\n            \n            vertical-align: bottom;\n            opacity: 1;\n        }\n        .text[_ngcontent-%COMP%]{\n            width:160px;\n            color:white;\n            position: absolute;\n            left: 15px;\n            bottom: 15px;\n        }"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
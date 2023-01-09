import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { NgbdCarouselPause } from './carousel-pause';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { CommonpageComponent } from './components/commonpage/commonpage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CurrentPlayingCarouselComponent } from './components/current-playing-carousel/current-playing-carousel.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { PopularMoviesCardsComponent } from './components/popular-movies-cards/popular-movies-cards.component';
import { TopRatedMoviesCardsComponent } from './components/top-rated-movies-cards/top-rated-movies-cards.component';
import { TrendingMoviesCardsComponent } from './components/trending-movies-cards/trending-movies-cards.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { MovieReviewsComponent } from './components/movie-reviews/movie-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { PopularTVComponent } from './components/popular-tv/popular-tv.component';
import { TopRatedTVComponent } from './components/top-rated-tv/top-rated-tv.component';
import { TrendingTVComponent } from './components/trending-tv/trending-tv.component';
import { RecommendedMovieComponent } from './components/recommended-movie/recommended-movie.component';
import { RecommendedTVComponent } from './components/recommended-tv/recommended-tv.component';
import { SimilarTVComponent } from './components/similar-tv/similar-tv.component';
import { SimilarMovieComponent } from './components/similar-movie/similar-movie.component';
import { ContinueWatchingComponent } from './components/continue-watching/continue-watching.component';
import { NgbdModalContent} from './components/movie-cast/movie-cast.component';
import { TvCastComponent } from './components/tv-cast/tv-cast.component';
import { TvReviewsComponent } from './components/tv-reviews/tv-reviews.component';
import { NgbdModalContentTV} from './components/tv-cast/tv-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstpageComponent,
    SecondpageComponent,
    CommonpageComponent,
    NavBarComponent,
    CurrentPlayingCarouselComponent,
    FirstChildComponent,
    PopularMoviesCardsComponent,
    TopRatedMoviesCardsComponent,
    TrendingMoviesCardsComponent,
    MovieDetailsComponent,
    MovieCastComponent,
    MovieReviewsComponent,
    FooterComponent,
    ModalComponent,
    WatchlistComponent,
    TvDetailsComponent,
    PopularTVComponent,
    TopRatedTVComponent,
    TrendingTVComponent,
    RecommendedMovieComponent,
    RecommendedTVComponent,
    SimilarTVComponent,
    SimilarMovieComponent,
    ContinueWatchingComponent,
    NgbdModalContent,
    TvCastComponent,
    TvReviewsComponent,
    NgbdModalContentTV
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    NgbCarouselModule,
    YouTubePlayerModule,
    LayoutModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

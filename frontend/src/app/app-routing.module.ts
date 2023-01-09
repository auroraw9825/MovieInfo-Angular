import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';

const routes: Routes = [
	{path:'', component: HomepageComponent},
	{
		path:'watch/movie',
		children:[
			{path:'', component: FirstpageComponent},
			{path:':id', component: MovieDetailsComponent} // for movie details, movie id
			// {path:':id/../../../watch/movie:id', component: MovieDetailsComponent} 
		]
	},	
	{
		path:'watch/tv',
		children:[
			{path:'', component: SecondpageComponent},
			{path:':id', component: TvDetailsComponent} // for movie details, movie id
		]
	},	
	{path:'mylist', component: WatchlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

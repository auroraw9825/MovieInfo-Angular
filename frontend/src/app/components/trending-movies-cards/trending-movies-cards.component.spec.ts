import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoviesCardsComponent } from './trending-movies-cards.component';

describe('TrendingMoviesCardsComponent', () => {
  let component: TrendingMoviesCardsComponent;
  let fixture: ComponentFixture<TrendingMoviesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMoviesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMoviesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedMoviesCardsComponent } from './top-rated-movies-cards.component';

describe('TopRatedMoviesCardsComponent', () => {
  let component: TopRatedMoviesCardsComponent;
  let fixture: ComponentFixture<TopRatedMoviesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedMoviesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedMoviesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

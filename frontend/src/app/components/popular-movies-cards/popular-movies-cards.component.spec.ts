import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesCardsComponent } from './popular-movies-cards.component';

describe('PopularMoviesCardsComponent', () => {
  let component: PopularMoviesCardsComponent;
  let fixture: ComponentFixture<PopularMoviesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMoviesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

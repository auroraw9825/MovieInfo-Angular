import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvReviewsComponent } from './tv-reviews.component';

describe('TvReviewsComponent', () => {
  let component: TvReviewsComponent;
  let fixture: ComponentFixture<TvReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

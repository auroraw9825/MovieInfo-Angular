import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlayingCarouselComponent } from './current-playing-carousel.component';

describe('CurrentPlayingCarouselComponent', () => {
  let component: CurrentPlayingCarouselComponent;
  let fixture: ComponentFixture<CurrentPlayingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPlayingCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPlayingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

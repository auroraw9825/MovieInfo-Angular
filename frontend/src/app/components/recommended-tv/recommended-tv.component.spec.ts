import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedTVComponent } from './recommended-tv.component';

describe('RecommendedTVComponent', () => {
  let component: RecommendedTVComponent;
  let fixture: ComponentFixture<RecommendedTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

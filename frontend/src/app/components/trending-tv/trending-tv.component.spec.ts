import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTVComponent } from './trending-tv.component';

describe('TrendingTVComponent', () => {
  let component: TrendingTVComponent;
  let fixture: ComponentFixture<TrendingTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

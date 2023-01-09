import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarTVComponent } from './similar-tv.component';

describe('SimilarTVComponent', () => {
  let component: SimilarTVComponent;
  let fixture: ComponentFixture<SimilarTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

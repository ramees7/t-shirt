import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingnewarrivalsComponent } from './trendingnewarrivals.component';

describe('TrendingnewarrivalsComponent', () => {
  let component: TrendingnewarrivalsComponent;
  let fixture: ComponentFixture<TrendingnewarrivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingnewarrivalsComponent]
    });
    fixture = TestBed.createComponent(TrendingnewarrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

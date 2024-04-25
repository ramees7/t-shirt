import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingproductsviewComponent } from './trendingproductsview.component';

describe('TrendingproductsviewComponent', () => {
  let component: TrendingproductsviewComponent;
  let fixture: ComponentFixture<TrendingproductsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingproductsviewComponent]
    });
    fixture = TestBed.createComponent(TrendingproductsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsproductsviewComponent } from './brandsproductsview.component';

describe('BrandsproductsviewComponent', () => {
  let component: BrandsproductsviewComponent;
  let fixture: ComponentFixture<BrandsproductsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsproductsviewComponent]
    });
    fixture = TestBed.createComponent(BrandsproductsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

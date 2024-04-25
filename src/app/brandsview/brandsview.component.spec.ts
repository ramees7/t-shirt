import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsviewComponent } from './brandsview.component';

describe('BrandsviewComponent', () => {
  let component: BrandsviewComponent;
  let fixture: ComponentFixture<BrandsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsviewComponent]
    });
    fixture = TestBed.createComponent(BrandsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

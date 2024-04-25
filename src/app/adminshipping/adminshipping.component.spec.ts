import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshippingComponent } from './adminshipping.component';

describe('AdminshippingComponent', () => {
  let component: AdminshippingComponent;
  let fixture: ComponentFixture<AdminshippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminshippingComponent]
    });
    fixture = TestBed.createComponent(AdminshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

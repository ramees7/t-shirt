import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarrivalproductsviewComponent } from './newarrivalproductsview.component';

describe('NewarrivalproductsviewComponent', () => {
  let component: NewarrivalproductsviewComponent;
  let fixture: ComponentFixture<NewarrivalproductsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewarrivalproductsviewComponent]
    });
    fixture = TestBed.createComponent(NewarrivalproductsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

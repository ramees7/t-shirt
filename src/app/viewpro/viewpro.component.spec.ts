import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproComponent } from './viewpro.component';

describe('ViewproComponent', () => {
  let component: ViewproComponent;
  let fixture: ComponentFixture<ViewproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproComponent]
    });
    fixture = TestBed.createComponent(ViewproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

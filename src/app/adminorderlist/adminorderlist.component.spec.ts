import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderlistComponent } from './adminorderlist.component';

describe('AdminorderlistComponent', () => {
  let component: AdminorderlistComponent;
  let fixture: ComponentFixture<AdminorderlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminorderlistComponent]
    });
    fixture = TestBed.createComponent(AdminorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

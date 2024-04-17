import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddbrandcategoryComponent } from './adminaddbrandcategory.component';

describe('AdminaddbrandcategoryComponent', () => {
  let component: AdminaddbrandcategoryComponent;
  let fixture: ComponentFixture<AdminaddbrandcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaddbrandcategoryComponent]
    });
    fixture = TestBed.createComponent(AdminaddbrandcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

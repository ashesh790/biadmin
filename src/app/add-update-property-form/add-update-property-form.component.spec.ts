import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePropertyFormComponent } from './add-update-property-form.component';

describe('AddUpdatePropertyFormComponent', () => {
  let component: AddUpdatePropertyFormComponent;
  let fixture: ComponentFixture<AddUpdatePropertyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdatePropertyFormComponent]
    });
    fixture = TestBed.createComponent(AddUpdatePropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

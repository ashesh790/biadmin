import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBoxComponent } from './prop-box.component';

describe('PropBoxComponent', () => {
  let component: PropBoxComponent;
  let fixture: ComponentFixture<PropBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropBoxComponent]
    });
    fixture = TestBed.createComponent(PropBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

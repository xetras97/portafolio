import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalsComponent } from './edit-modals.component';

describe('EditModalsComponent', () => {
  let component: EditModalsComponent;
  let fixture: ComponentFixture<EditModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModalsComponent } from './new-modals.component';

describe('NewModalsComponent', () => {
  let component: NewModalsComponent;
  let fixture: ComponentFixture<NewModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

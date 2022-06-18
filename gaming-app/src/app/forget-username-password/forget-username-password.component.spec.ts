import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetUsernamePasswordComponent } from './forget-username-password.component';

describe('ForgetUsernamePasswordComponent', () => {
  let component: ForgetUsernamePasswordComponent;
  let fixture: ComponentFixture<ForgetUsernamePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetUsernamePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetUsernamePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

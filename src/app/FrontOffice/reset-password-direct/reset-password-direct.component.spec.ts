import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordDirectComponent } from './reset-password-direct.component';

describe('ResetPasswordDirectComponent', () => {
  let component: ResetPasswordDirectComponent;
  let fixture: ComponentFixture<ResetPasswordDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoUserComponent } from './more-info-user.component';

describe('MoreInfoUserComponent', () => {
  let component: MoreInfoUserComponent;
  let fixture: ComponentFixture<MoreInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelevryConnectedComponent } from './delevry-connected.component';

describe('DelevryConnectedComponent', () => {
  let component: DelevryConnectedComponent;
  let fixture: ComponentFixture<DelevryConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelevryConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelevryConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

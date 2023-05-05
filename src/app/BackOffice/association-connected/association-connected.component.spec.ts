import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationConnectedComponent } from './association-connected.component';

describe('AssociationConnectedComponent', () => {
  let component: AssociationConnectedComponent;
  let fixture: ComponentFixture<AssociationConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

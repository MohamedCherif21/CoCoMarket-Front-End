import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatioInfoComponent } from './associatio-info.component';

describe('AssociatioInfoComponent', () => {
  let component: AssociatioInfoComponent;
  let fixture: ComponentFixture<AssociatioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatioInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociatioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

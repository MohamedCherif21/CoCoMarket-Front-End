import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAccesComponent } from './test-acces.component';

describe('TestAccesComponent', () => {
  let component: TestAccesComponent;
  let fixture: ComponentFixture<TestAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerConnectedComponent } from './byer-connected.component';

describe('ByerConnectedComponent', () => {
  let component: ByerConnectedComponent;
  let fixture: ComponentFixture<ByerConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByerConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByerConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

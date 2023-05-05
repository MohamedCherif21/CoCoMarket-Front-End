import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerConnectedComponent } from './seller-connected.component';

describe('SellerConnectedComponent', () => {
  let component: SellerConnectedComponent;
  let fixture: ComponentFixture<SellerConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

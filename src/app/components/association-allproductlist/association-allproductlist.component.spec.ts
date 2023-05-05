import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationAllproductlistComponent } from './association-allproductlist.component';

describe('AssociationAllproductlistComponent', () => {
  let component: AssociationAllproductlistComponent;
  let fixture: ComponentFixture<AssociationAllproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationAllproductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationAllproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToCatalogueComponent } from './add-product-to-catalogue.component';

describe('AddProductToCatalogueComponent', () => {
  let component: AddProductToCatalogueComponent;
  let fixture: ComponentFixture<AddProductToCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductToCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

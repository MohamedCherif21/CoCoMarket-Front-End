import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogueListComponent } from './admin-catalogue-list.component';

describe('AdminCatalogueListComponent', () => {
  let component: AdminCatalogueListComponent;
  let fixture: ComponentFixture<AdminCatalogueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCatalogueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCatalogueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

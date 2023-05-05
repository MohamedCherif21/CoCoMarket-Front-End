import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllproductlistComponent } from './admin-allproductlist.component';

describe('AdminAllproductlistComponent', () => {
  let component: AdminAllproductlistComponent;
  let fixture: ComponentFixture<AdminAllproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllproductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

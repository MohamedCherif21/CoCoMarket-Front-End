import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxesComponentComponent } from './mailboxes-component.component';

describe('MailboxesComponentComponent', () => {
  let component: MailboxesComponentComponent;
  let fixture: ComponentFixture<MailboxesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailboxesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailButtonTestComponent } from './email-button-test.component';

describe('EmailButtonTestComponent', () => {
  let component: EmailButtonTestComponent;
  let fixture: ComponentFixture<EmailButtonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailButtonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

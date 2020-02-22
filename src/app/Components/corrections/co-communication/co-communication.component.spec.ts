import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCommunicationComponent } from './co-communication.component';

describe('CommunicationComponent', () => {
  let component: CoCommunicationComponent;
  let fixture: ComponentFixture<CoCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

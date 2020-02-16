import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApiRestComponent } from './co-api-rest.component';

describe('ApiRestComponent', () => {
  let component: CoApiRestComponent;
  let fixture: ComponentFixture<CoApiRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoApiRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

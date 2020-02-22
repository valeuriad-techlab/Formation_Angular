import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPipeComponent } from './co-pipe.component';

describe('PipeComponent', () => {
  let component: CoPipeComponent;
  let fixture: ComponentFixture<CoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

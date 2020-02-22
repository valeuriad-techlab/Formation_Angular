import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoConteneurParentComponent } from './co-conteneur-parent.component';

describe('ConteneurParentComponent', () => {
  let component: CoConteneurParentComponent;
  let fixture: ComponentFixture<CoConteneurParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoConteneurParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoConteneurParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

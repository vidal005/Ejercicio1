import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroProyectoComponent } from './miembro-proyecto.component';

describe('MiembroProyectoComponent', () => {
  let component: MiembroProyectoComponent;
  let fixture: ComponentFixture<MiembroProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

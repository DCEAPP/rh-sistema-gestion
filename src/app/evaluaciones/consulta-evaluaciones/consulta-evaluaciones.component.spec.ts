import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEvaluacionesComponent } from './consulta-evaluaciones.component';

describe('ConsultaEvaluacionesComponent', () => {
  let component: ConsultaEvaluacionesComponent;
  let fixture: ComponentFixture<ConsultaEvaluacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaEvaluacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

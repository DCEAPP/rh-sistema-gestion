import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenInteligenciaComponent } from './examen-inteligencia.component';

describe('ExamenInteligenciaComponent', () => {
  let component: ExamenInteligenciaComponent;
  let fixture: ComponentFixture<ExamenInteligenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenInteligenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenInteligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

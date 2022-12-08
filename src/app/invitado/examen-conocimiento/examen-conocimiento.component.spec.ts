import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenConocimientoComponent } from './examen-conocimiento.component';

describe('ExamenConocimientoComponent', () => {
  let component: ExamenConocimientoComponent;
  let fixture: ComponentFixture<ExamenConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenConocimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

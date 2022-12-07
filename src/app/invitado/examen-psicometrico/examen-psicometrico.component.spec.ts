import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenPsicometricoComponent } from './examen-psicometrico.component';

describe('ExamenPsicometricoComponent', () => {
  let component: ExamenPsicometricoComponent;
  let fixture: ComponentFixture<ExamenPsicometricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenPsicometricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenPsicometricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

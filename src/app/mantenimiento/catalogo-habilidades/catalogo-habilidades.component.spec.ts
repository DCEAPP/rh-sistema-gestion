import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoHabilidadesComponent } from './catalogo-habilidades.component';

describe('CatalogoHabilidadesComponent', () => {
  let component: CatalogoHabilidadesComponent;
  let fixture: ComponentFixture<CatalogoHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

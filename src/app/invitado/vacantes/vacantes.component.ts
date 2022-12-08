import { Component, OnInit } from '@angular/core';

interface vacantes{
  key: string;
  nombre: string;
  nivel: string[];
  perfil: string[];
  experiencia: string;
  sueldo: number;
  prestaciones: string;
}

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {
  listOfData: vacantes[] = [
    {
      key: '5',
      nombre: 'AMA DE LLAVES',
      nivel: ['LICENCIATURA'],
      perfil: ['LIC. EN TURISMO','LIC. EN COMUNICACION'],
      experiencia: '1 AÑO',
      sueldo: 7800.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '6',
      nombre: 'HOUSEMAN',
      nivel: ['LICENCIATURA'],
      perfil: ['LIC. EN TURISMO'],
      experiencia: '1 AÑO',
      sueldo: 6200.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '9',
      nombre: 'LAVA PLATOS',
      nivel: ['MEDIO SUPERIOR'],
      perfil: ['PREPARATORIA FINALIZADA'],
      experiencia: '1 AÑO',
      sueldo: 6200.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '10',
      nombre: 'GERENTE DE BARES',
      nivel: ['LICENCIATURA'],
      perfil: ['LIC. EN CONTABILIDAD', 'LIC EN ADMINISTRACION DE EMPRESAS','ING.EN GESTION EMPRESARIAL','LIC. EN GASTRONOMIA'],
      experiencia: '3 AÑOS',
      sueldo: 13500.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '11',
      nombre: 'BARTENDER',
      nivel: ['SUPERIOR'],
      perfil: ['LIC. GATRONOMIA'],
      experiencia: '3 AÑOS',
      sueldo: 9000.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '12',
      nombre: 'CAPITAN DE CAMAREROS',
      nivel: ['SUPERIOR'],
      perfil: ['LIC. GATRONOMIA','LIC. EN CONTABILIDAD','ADMINISTRACION DE EMPRESAS'],
      experiencia: '1 AÑO',
      sueldo: 9000.00,
      prestaciones:'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '13',
      nombre: 'CAMAREROS',
      nivel: ['MEDIA SUPERIOR'],
      perfil: ['PREPARATORIA FINALIZADA'],
      experiencia: '1 AÑO',
      sueldo: 6000.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '15',
      nombre: 'RECLUTADOR',
      nivel: ['SUPERIOR'],
      perfil: ['LIC. EN DERECHO','LIC. EN ADMINISTRACION DE EMPRESAS','LIC. EN PSICOLOGIA'],
      experiencia: '1 AÑO',
      sueldo: 10000.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '16',
      nombre: 'CAPACITADOR',
      nivel: ['SUPERIOR'],
      perfil: ['LIC. EN DERECHO','LIC. EN ADMINISTRACION DE EMPRESAS','LIC. EN PSICOLOGIA'],
      experiencia: '1 AÑO',
      sueldo: 10000.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    },
    {
      key: '16',
      nombre: 'GERENTE DE COMPRAS',
      nivel: ['SUPERIOR'],
      perfil: ['LIC. EN ADMINISTRACION DE EMPRESAS','NEGOCIOS INTERNACIONALES','LOGISTICA'],
      experiencia: '1 AÑO',
      sueldo: 10000.00,
      prestaciones: 'SEGURO DE VIDA, AGUINALDO'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

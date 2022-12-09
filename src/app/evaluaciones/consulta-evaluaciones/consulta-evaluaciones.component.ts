import { Component, OnInit } from '@angular/core';

interface DataItem {
  nombre: string;
  puestoSolicitado: string;
  calificacionPsico: number;
  calificacionCono: number;
  calificacionInte: number;
  estatus: string;
}
@Component({
  selector: 'app-consulta-evaluaciones',
  templateUrl: './consulta-evaluaciones.component.html',
  styleUrls: ['./consulta-evaluaciones.component.css']
})
export class ConsultaEvaluacionesComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      nombre: 'ELIENETH ARAGON ARAGON',
      puestoSolicitado: 'AUXILIAR',
      calificacionPsico: 85,
      calificacionCono: 85,
      calificacionInte: 85,
      estatus: 'NO CONTRATADO'
    },
    {
      nombre: 'ANGEL FERNANDO ANTONIO CARLOCK',
      puestoSolicitado: 'DIRECTOR',
      calificacionPsico: 50,
      calificacionCono: 89,
      calificacionInte: 45,
      estatus: 'NO CONTRATADO'
    },
    {
      nombre: 'DAFNE ESMERALDA ENRIQUEZ CARRILLO',
      puestoSolicitado: 'SUBDIRECTOR',
      calificacionPsico: 85,
      calificacionCono: 90,
      calificacionInte: 100,
      estatus: 'NO CONTRATADO'
    },
    {
      nombre: 'GENARO JOSE MARTINEZ',
      puestoSolicitado: 'AUXILIAR',
      calificacionPsico: 25,
      calificacionCono: 35,
      calificacionInte: 75,
      estatus: 'NO CONTRATADO'
    },
    {
      nombre: 'RUBY CORTES SANCHEZ',
      puestoSolicitado: 'AUXILIAR',
      calificacionPsico: 85,
      calificacionCono: 105,
      calificacionInte: 70,
      estatus: 'NO CONTRATADO'
    }
  ];
  listOfDisplayData = [...this.listOfData];


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.nombre.indexOf(this.searchValue) !== -1);
  }
  constructor() { }

  ngOnInit(): void {
  }
  contratar(index: number, estatus: string): void {

    this.listOfData[index].estatus = 'CONTRATADO';
  }
  rechazar(index: number, estatus: string): void {

    this.listOfData[index].estatus = 'RECHAZADO';
  }
}

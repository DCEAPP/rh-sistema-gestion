import {Component, OnInit} from '@angular/core';

interface DataItem {
  nombre: string;
  fecha: string;

  cursando: string;
  centroEduc: string;
  nivelEstudios: string;
  areaProfesional: string;
  habilidades: string;
  nombreEmpresa: string;
  giroEmpresa: string;
  cargo: string;
  departamento: string;

}

@Component({
  selector: 'app-consulta-solicitudes',
  templateUrl: './consulta-solicitudes.component.html',
  styleUrls: ['./consulta-solicitudes.component.css']
})
export class ConsultaSolicitudesComponent implements OnInit {

  constructor() {
  }


  visible = false;
  listOfData: DataItem[] = [
    {
      centroEduc: 'COBAO',
      nivelEstudios: 'MEDIA SUPERIOR',
      areaProfesional: 'INFORMATICA',
      nombre: 'IRIS',
      fecha: 'DICIEMBRE 2020',
      cursando: 'SI',
      habilidades: 'AUTOCONOCIMIENTO, IDENTIFICAR Y RESOLVER PROBLEMAS DE UNA MANERA ESTRUCTURADA',
      nombreEmpresa: 'TELEVISA',
      giroEmpresa: 'TELECOMUNICAIONES',
      cargo: 'EDITOR',
      departamento: 'CINEMATOGRAFICO'


    },
    {
      centroEduc: 'UGMEX',
      nivelEstudios: 'LICENCIATURA',
      areaProfesional: 'INFORMATICA',
      nombre: 'DAFNE',
      fecha: 'MARZO 2020',
      cursando: 'NO',
      habilidades: 'INTELIGENCIA EMOCIONAL Y SOCIAL',
      nombreEmpresa: 'DON DOMINIO',
      giroEmpresa: 'PAGINAS WEB',
      cargo: 'DESARROLLADOR',
      departamento: 'INFORMATICO'
    },
    {
      centroEduc: 'LA SALLE',
      nivelEstudios: 'POSGRADO',
      areaProfesional: 'INFORMATICA',
      nombre: 'ANGEL',
      fecha: 'FEBRERO 2020',
      cursando: 'SI',
      habilidades: 'MANEJO DE CONTABILIDAD, LENGUAJE NO VERBAL',
      nombreEmpresa: 'DIGITAL.ES',
      giroEmpresa: 'PAGINAS WEB',
      cargo: 'DESARROLLADOR',
      departamento: 'INFORMATICO'
    },
    {
      centroEduc: 'UNIVERSIDAD AUTONOMA BENITO JUAREZ DE OAXACA',
      nivelEstudios: 'lICENCIATURA',
      areaProfesional: 'INFORMATICA',
      nombre: 'ALEXIS',
      fecha: 'SEPTIEMBRE 2020',
      cursando: 'NO',
      habilidades: 'AUTOCONOCIMIENTO, MANEJO DE CONTABILIDAD, COMUNICACIÓN',
      nombreEmpresa: 'TELMEX',
      giroEmpresa: 'TELECOMUNICACIONES',
      cargo: 'SUPERVISORES',
      departamento: 'INSTALACIONES Y MANTENIMIENTO'
    },
    {
      centroEduc: 'INSTITUTO TECNOLOGICO DE OAXACA',
      nivelEstudios: 'POSGRADO',
      areaProfesional: 'INFORMATICA',
      nombre: 'KEVIN',
      fecha: 'AGOSTO 2020',
      cursando: 'SI',
      habilidades: 'MANEJO DE SOFTWARE, CONOCIMIENTO DE INFORMATICA',
      nombreEmpresa: 'FACEBOOK',
      giroEmpresa: 'WEB',
      cargo: 'EDITOR',
      departamento: 'INFORMATICO'
    }
  ];
  listOfDisplayData = [...this.listOfData];
  menu: any;
  data: any;
  isVisible: any;
  validateForm: any;

  currentSolicitud: any;

  ngOnInit(): void {
  }


  showModal(i: any, data: any): void {
    this.isVisible = true;
    this.currentSolicitud = data;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

}

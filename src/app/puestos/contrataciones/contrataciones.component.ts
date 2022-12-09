import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-contrataciones',
  templateUrl: './contrataciones.component.html',
  styleUrls: ['./contrataciones.component.css']
})
export class ContratacionesComponent implements OnInit {

  switchValue = false;

  searchValue = '';

  confirmModal?: NzModalRef;
  listOfData: Person[] = [
    {
      key: '1',
      nombre: 'Manuel Fabian Rojas',
      fechaInicio: '07/12/2022',
      fechaTerminoContrato: '08/12/2025',
      idEvaluación: '1',
      idPuesto:  'Gerente',
      idSolicitud: '1',
      idUsuario: '1',
      sueldoInicial: '20000',
    },
    {
      key: '2',
      nombre: 'Kevin David Molina Gomez',
      fechaInicio: '12/12/2020',
      fechaTerminoContrato: '12/12/2023',
      idEvaluación:  '2',
      idPuesto:  'Asistente administrativo',
      idSolicitud:  '2',
      idUsuario:  '2',
      sueldoInicial: '13000'
    },
    {
      key: '3',
      nombre: 'Elianeth Aragon Aragon',
      fechaInicio: '01/01/2020',
      fechaTerminoContrato: '01/03/2023',
      idEvaluación: '3',
      idPuesto: 'Gerente de Recursos Humanos',
      idSolicitud: '3',
      idUsuario: '3',
      sueldoInicial: '10000'
    },
    {
      key: '4',
      nombre: 'Andres Jahir Mendoza Yescas',
      fechaInicio: '13/02/2019',
      fechaTerminoContrato: '15/11/2022',
      idEvaluación: '4',
      idPuesto: 'Gerente de Recepción',
      idSolicitud: '4',
      idUsuario: '4',
      sueldoInicial: '12000'
    },
    {
      key: '5',
      nombre: 'Genaro Jose Martinez',
      fechaInicio: '12/06/2018',
      fechaTerminoContrato: '11/05/2023',
      idEvaluación: '5',
      idPuesto: 'Gerente de Ingeníeria',
      idSolicitud: '5',
      idUsuario: '5',
      sueldoInicial: '15000'
    },
    {
      key: '6',
      nombre: 'Angel Fernando Antonio Carlock',
      fechaInicio: '03/04/2015',
      fechaTerminoContrato: '07/08/2020',
      idEvaluación: '6',
      idPuesto: 'Gerente de Seguridad',
      idSolicitud: '6',
      idUsuario: '6',
      sueldoInicial: '7000'
    },
    {
      key: '7',
      nombre: 'Agustín Ollín García González',
      fechaInicio: '06/03/2015',
      fechaTerminoContrato: '05/05/2025',
      idEvaluación: '7',
      idPuesto: 'Programador',
      idSolicitud: '7',
      idUsuario: '7',
      sueldoInicial: '25000'
    }
  ];
  listOfDisplayData = [...this.listOfData];
  constructor(private fb: FormBuilder, private modal: NzModalService) { }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: '',
      fechaInicio: '',
      fechaTerminoContrato: '',
      idEvaluación: '',
      idPuesto: '',
      idSolicitud: '',
      idUsuario: '',
      sueldoInicial: ''
    });
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }

  }
  editar(): void {
    console.log('list of data' + this.currentData.nombre);
    console.log(this.index2);
    this.listOfDisplayData[this.index2].nombre = this.validateForm.get('nombre').value;
    this.listOfDisplayData[this.index2].idPuesto = this.validateForm.get('puesto').value;
    this.listOfDisplayData[this.index2].fechaInicio = this.validateForm.get('Fecha de inicio').value;
    this.listOfDisplayData[this.index2].fechaTerminoContrato = this.validateForm.get('Fecha del termino del contrato').value;
    this.listOfDisplayData[this.index2].idSolicitud = this.validateForm.get('Solicitud ').value;
    this.listOfDisplayData[this.index2].sueldoInicial = this.validateForm.get('Sueldo ').value;
    this.resetForm();

    this.isVisible = false;
    this.isOkLoading = false;
  }
  borrar(index: number) {
    this.listOfDisplayData = this.listOfDisplayData.filter(item => item !== this.listOfDisplayData[index]);
  }
  isVisible = false;
  isOkLoading = false;



  currentData: any;
  index2: number;


  showModal(index: number, data: any): void {
    if (data) {
      console.log('BORRAR' + data);
      this.currentData = data;
      this.index2 = index;
      this.validateForm = this.fb.group({
        nombre: [this.currentData.nombre, ''],
        idPuesto: [this.currentData.idPuesto, ''],
        fechaInicio: [this.currentData.fechaInicio, ''],
        fechaTerminoContrato: [this.currentData.fechaTerminoContrato, ''],
        idSolicitud: [this.currentData.idSolicitud, ''],
        sueldoInicial: [this.currentData.sueldoInicial, ''],
      });
    }
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.editar();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Deseas eliminar esta vacante?',
      nzContent: 'OK para confirmar',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          this.borrar(index);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    if (this.searchValue == '') {
      this.listOfDisplayData = [...this.listOfData];
    } else {
      console.log("Buscar" + this.searchValue);
      this.listOfDisplayData = this.listOfData.filter((item) => item.idPuesto.indexOf(this.searchValue) !== -1);
    }
  }

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
  }

}

interface Person {
  key: string;
  fechaInicio: string;
  fechaTerminoContrato: string;
  idEvaluación: string;
  idPuesto: string;
  idSolicitud: string;
  idUsuario: string;
  sueldoInicial: string;
  nombre: string;
}


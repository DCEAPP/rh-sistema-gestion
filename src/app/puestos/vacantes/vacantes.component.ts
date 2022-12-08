import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
interface vacantes{
  key: string;
  nombre: string;
  perfil: string[];
  experiencia: string;
  sueldo: number;
}

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {
  switchValue = false;

  searchValue = '';

  confirmModal?: NzModalRef;
  listOfData: vacantes[] = [
    {
      key: '1',
      nombre: 'RECEPCIONISTA',
      perfil: ['LIC. EN TURISMO','LIC. EN COMUNICACION'],
      experiencia: '1 AÑO',
      sueldo: 6500
    },
    {
      key: '2',
      nombre: 'SEGURIDAD',
      perfil: ['PREPARATORIA FINALIZADA'],
      experiencia: '1 AÑO',
      sueldo: 6000
    },
    {
      key: '4',
      nombre: 'GERENTE DE RECURSOS HUMANOS',
      perfil: ['LIC. EN DERECHO', 'LIC EN ADMINISTRACION DE EMPRESAS','ING.EN GESTION EMPRESARIAL'],
      experiencia: '3 AÑOS',
      sueldo: 13500
    }
  ];
  listOfDisplayData = [...this.listOfData];
  constructor(private fb: FormBuilder,private modal: NzModalService) { }


  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }

  }
  isVisible = false;
  isOkLoading = false;

  puesto=""

  currentData: any;

  showModal(data: any): void {
    this.currentData = data;
    this.puesto = data.sueldo;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
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
      this.listOfDisplayData = this.listOfData.filter((item) => item.nombre.indexOf(this.searchValue) !== -1);
    }
  }

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
  }

}

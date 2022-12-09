import { Component, OnInit } from '@angular/core';
import {NzIconService} from "ng-zorro-antd/icon";
interface DataItem {
  id: number;
  EVENTO: string;
  expand: boolean;
  TITULO: string;
  FECHADEINICIO: string;
  PERSONAL: string;
  LUGAR: string;
  description: string;
  presupuesto: number;

}
@Component({
  selector: 'app-consulta-proyectos',
  templateUrl: './consulta-proyectos.component.html',
  styleUrls: ['./consulta-proyectos.component.css']
})
export class ConsultaProyectosComponent implements OnInit {

  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }

  editCache: { [key: string]: { edit: boolean; data: DataItem } } = {};

  searchValue = '';
  visible = false;
  expandSet = new Set<number>();
  listOfData: DataItem[] = [
    {
      id: 1,
      EVENTO: 'CONFERENCIAS Y CONVENCIONES',
      expand: false,
      TITULO: 'PRESENTACION DE LA EMPRESA',
      FECHADEINICIO: '24/02/23',
      PERSONAL: 'GERENTE DE ALIMENTOS Y BEBIDAS, GERENTE ADMINISTRATIVO',
      LUGAR: 'SALA ESPECIAL',
      presupuesto: 10000,
      description: 'PRESENTACION DE INFORMES Y PROYECTOS'

    },
    {
      id: 2,
      EVENTO: 'REUNIONES',
      expand: false,
      TITULO: 'REUNION DE FORD ',
      FECHADEINICIO: '21/01/23',
      PERSONAL: 'GERENTE DE ALIMENTOS Y BEBIDAS, GERENTE ADMINISTRATIVO',
      LUGAR: 'SALA PEQUEÑA',
      presupuesto: 25000,
      description: 'ESTA REUNION SE LLEVA PARA UNA REUNION DE NEGOCIOS ACERCA DE FORD'


    },
    {
      id: 3,
      EVENTO: 'EVENTO GASTRONOMICO',
      expand: false,
      TITULO: 'LOS MASTERCHEFS JUNIORS',
      FECHADEINICIO: '21/02/23',
      PERSONAL: 'GERENTE DE ALIMENTOS Y BEBIDAS, GERENTE ADMINISTRATIVO',
      LUGAR: 'TERRAZA DEL HOTEL',
      presupuesto: 15000,
      description: 'EN LA TERRAZA DEL HOTEL  SE LLEVAN A CABO LAS DEGUSTACIONES DE LOS PEQUEÑOS'


    },
    {
      id: 4,
      EVENTO: 'EVENTO CULTURAL',
      expand: false,
      TITULO: 'PRESENTACON DE MODA GUCCI',
      FECHADEINICIO: '15/02/23',
      PERSONAL: 'GERENTE ADMINISTRATIVO',
      LUGAR: 'TERRAZA ABIERTA',
      presupuesto: 12000,
      description: 'UNA PRESENTACION DE GUCCI DE 2023'


    },
    {
      id: 5,
      EVENTO: 'CELEBRACIONES',
      expand: false,
      TITULO: 'BODA DE LUJO',
      FECHADEINICIO: '21/04/23',
      PERSONAL: 'GERENTE DE ALIMENTOS Y BEBIDAS, GERENTE ADMINISTRATIVO',
      LUGAR: 'SALON DE GALA',
      presupuesto: 19000,
      description: 'EN ESTE EVENTO SE PRESENTA UN MENU EXCLUSIVO QUE SE PUEDE DEGUSTAR DURANTE LA BODA '


    }

  ];
  listOfDisplayData = [...this.listOfData];

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: {...item}
      };
    });
  }


  onExpandChange(id: number, checked: boolean): void {

    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  reiniciar(): void {
    this.searchValue = '';
    this.buscar();
  }

  buscar(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.EVENTO
      .indexOf(this.searchValue) !== -1);
  }
  deleteRow(id: number): void {

    this.listOfData = this.listOfData.filter(data => data.id !== id) ;
    this.reiniciar();
  }

  ngOnInit(): void {
  }

}

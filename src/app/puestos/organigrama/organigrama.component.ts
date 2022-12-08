import {Component, OnInit} from '@angular/core';

// make your own interface that extends TreeNode
export interface TreeNode {
  // Node
  children: TreeNode[];
  hideChildren?: boolean;
  onClick?: () => void;
  // CSS (used for custom styling of individual nodes)
  cssClass?: string;
  css?: string;
}

interface MyTreeNode extends TreeNode {
  name: string;
  description?: string;
  image?: string;
  children: MyTreeNode[];
}

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.css']
})
export class OrganigramaComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  tree: MyTreeNode = {
    name: 'GERENTE GENERAL',
    description: 'MANUEL FABIAN ROJAS',
    image: 'assets/personas/fabian.jpeg',
    css: 'background-color: #F00000',
    onClick: () => console.log('Click Jefe'),
    children: [
      {
        name: 'ASISTENTE ADMINISTRATIVO',
        description: 'KEVIN DAVID MOLINA GOMEZ',
        image: 'assets/personas/kevin.jpeg',
        children: [
        ]
      },
      {
        name: 'GERENTE DE HABITACIONES',
        description: 'DAFNE ESMERALDA ENRIQUEZ CARRILLO',
        image: 'assets/personas/dafne.jpeg',
        children: [
          {
            name: 'JEFE DE AMA DE LLAVES',
            description: 'ALBERTO LOPEZ HERNANDEZ',
            image: 'assets/personas/antonio.jpeg',
            children: [
              {
                name: 'AMA DE LLAVES',
                children: []
              },
              {
                name: 'HOUSEMAN',
                children: []
              }
            ]
          },
        ]
      },
      {
        name: 'GERENTE DE ALIMENTOS Y BEBIDAS',
        description: 'IRIS SAMAHI ALMARAZ MARTINEZ',
        image: 'assets/personas/samahi.jpeg',
        children: [
          {
            name: 'CHEF',
            description: 'ALEXIS YAHIR FRANCO JIMENEZ',
            image: 'assets/personas/yahir.jpeg',
            children: [
              {
                name: 'LAVA PLATOS',
                description: '',
                children: [],
                onClick: () => console.log('Google chrome stole some RAM')
              },
            ],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'GERENTE DE BARES',
            description: '',
            children: [
              {
                name: 'BARTENDER',
                description: '',
                children: [],
                onClick: () => console.log('Google chrome stole some RAM')
              },
            ],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'CAPITÁN CAMAREROS',
            description: '',
            children: [
              {
                name: 'CAMARERO',
                description: '',
                children: [],
                onClick: () => console.log('Google chrome stole some RAM')
              },
            ],
            onClick: () => console.log('Google chrome stole some RAM')
          }
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
      {
        name: 'GERENTE DE RECURSOS HUMANOS',
        description: 'ELIANETH ARAGON ARAGON',
        image: 'assets/personas/elianeth.jpeg',
        children: [
          {
            name: 'RECLUTADOR',
            description: '',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'CAPACITADOR',
            description: '',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
      {
        name: 'GERENTE ADMINISTRATIVO',
        description: 'LETICIA CORTEZ ZARATE',
        image: 'assets/personas/leticia.jpeg',
        children: [
          {
            name: 'GERENTE CONTABILIDAD',
            description: 'GAEL ',
            image: 'assets/personas/gael.jpeg',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'GERENTE DE COMPRAS',
            description: '',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
      {
        name: 'GERENTE DE INGENIERÍA',
        description: 'GENARO JOSE MARTINEZ',
        image: 'assets/personas/genaro.jpeg',
        children: [
          {
            name: 'GERENTE DE MANTENIMIENTO',
            description: 'EDUARDO EMILIO LOPEZ LOPEZ',
            image: 'assets/personas/emilio.jpeg',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'GERENTE DE COMPUTOS',
            description: 'FRANCISCO ANTONIO',
            image: 'assets/personas/nose.jpeg',
            children: [
              {
                name: 'PROGRAMADOR',
                description: 'AGUSTIN OLLIN GARCIA GONZALEZ',
                image: 'https://avatars.githubusercontent.com/u/85704884?v=4',
                children: [],
                onClick: () => console.log('Google chrome stole some RAM')
              },
            ],
            onClick: () => console.log('Google chrome stole some RAM')
          },
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
      {
        name: 'GERENTE DE RECEPCION',
        description: 'ANDRES  JAHIR MENDOZA YESCAS',
        image: 'assets/personas/alexis.jpeg',
        children: [
          {
            name: 'RECEPCIONISTA',
            description: 'KEVIN ARAGON',
            image: 'assets/personas/kevinaragon.jpeg',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
          {
            name: 'RECEPCIONISTA NOCTURNO',
            description: 'PATRICIA EUGENIO',
            image: 'assets/personas/patricia.jpeg',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
      {
        name: 'GERENTE DE SEGURIDAD',
        description: 'ANGEL FERNANDO ANTONIO CARLOCK',
        image: 'assets/personas/carlock.jpeg',
        children: [
          {
            name: 'SEGURIDAD',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
          },
        ],
        onClick: () => console.log('Google chrome stole some RAM')
      },
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }
  showModal(node: any): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}

import { Component, OnInit } from '@angular/core';
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

  tree: MyTreeNode = {
    name: 'Director',
    description: 'Descripción del puesto',
    image: 'assets/personas/kevin.jpeg',
    css: 'background-color: #F00000',
    onClick: () => alert('Death to dogs'),
    children: [
      {
        name: 'Sub Director',
        description: 'Descripción del puesto',
        image: 'assets/personas/kevin.jpeg',
        children: [
          {
            name: 'Puesto',
            image: 'assets/personas/kevin.jpeg',
            children: []
          },
          {
            name: 'Puesto',
            cssClass: 'yellow-on-hover',
            image: 'assets/personas/kevin.jpeg',
            children: []
          },
          {
            name: 'Puesto',
            image: 'assets/personas/kevin.jpeg',
            children: []
          }
        ]
      },
      {
        name: 'Sub Director',
        description: 'Descripción del puesto',
        image: 'assets/personas/kevin.jpeg',
        children: [
          {
            name: 'Puesto',
            image: 'assets/personas/kevin.jpeg',
            children: []
          },
          {
            name: 'Puesto',
            image: 'assets/personas/kevin.jpeg',
            children: [
              {
                name: 'Puesto',
                image: 'assets/personas/kevin.jpeg',
                children: [
                  {
                    name: 'Puesto',
                    image: 'assets/personas/kevin.jpeg',
                    children: []
                  }
                ],
              },
              {
                name: 'Puesto',
                image: 'assets/personas/kevin.jpeg',
                children: [
                  {
                    name: 'Puesto',
                    image: 'assets/personas/kevin.jpeg',
                    children: [
                      {
                        name: 'Puesto',
                        image: 'assets/personas/kevin.jpeg',
                        children: [
                          {
                            name: 'Puesto',
                            image: 'assets/personas/kevin.jpeg',
                            children: [
                              {
                                name: 'Puesto',
                                image: 'assets/personas/kevin.jpeg',
                                children: []
                              },
                              {
                                name: 'Puesto',
                                image: 'assets/personas/kevin.jpeg',
                                children: []
                              }
                            ]
                          },
                          {
                            name: 'Puesto',
                            image: 'assets/personas/kevin.jpeg',
                            children: [
                              {
                                name: 'Puesto',
                                image: 'assets/personas/kevin.jpeg',
                                children: []
                              },
                              {
                                name: 'Puesto',
                                image: 'assets/personas/kevin.jpeg',
                                children: []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Sub Director',
        description: 'Descripción del puesto',
        image: 'assets/personas/kevin.jpeg',
        children: [],
        onClick: () => console.log('Google chrome stole some RAM')
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

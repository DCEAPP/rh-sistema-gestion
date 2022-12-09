import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {Observable, Observer} from 'rxjs';
import {NzFormatEmitEvent, NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private fb: FormBuilder, private msg: NzMessageService) {
  }

  validateForm!: FormGroup;
  selectedValue = null;
  inputValue?: string;
  value: string;
  value1: string;
  value2: string;

  radioValue = 'si';
  tags = ['Unremovable', 'Tag 2', 'Tag 3'];
  inputVisible = false;
  inputValue1 = '';

  expandKeys = ['0-0'];
  value5: string;
  nodes = [
    {
      title: 'LÓGICA',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'CONSTRUIR ARGUMENTOS RACIONALES Y CASOS DE NEGOCIO',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'IDENTIFICAR Y RESOLVER PROBLEMAS DE UNA MANERA ESTRUCTURADA',
          value: '0-0-2',
          key: '0-0-2'
        },
        {
          title: 'PROCEDIMIENTO LÓGICO',
          value: '0-0-1',
          key: '0-0-1'
        },
      ]
    },
    {
      title: 'TÉCNICA',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'MANEJO DE CONTABILIDAD',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'MANEJO DE SOFTWARE',
          value: '0-0-2',
          key: '0-0-2'
        },
        {
          title: 'CONOCIMIENTO DE INFORMÁTICA BÁSICA',
          value: '0-0-2',
          key: '0-0-1'
        },
        {
          title: 'USO DE OFFICE 365',
          value: '0-0-2',
          key: '0-0-1'
        },
      ]
    },
    {
      title: 'PROYECTO',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'GESTIÓN DE PROYECTOS',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'AUTOCONOCIMIENTO',
          value: '0-0-2',
          key: '0-0-2'
        },
        {
          title: 'INTELIGENCIA EMOCIONAL Y SOCIAL',
          value: '0-0-2',
          key: '0-0-1'
        },
        {
          title: 'GESTIÓN DE EQUIPOS',
          value: '0-0-2',
          key: '0-0-1'
        },
        {
          title: 'RESOLUCIÓN DE CONFLICTOS',
          value: '0-0-2',
          key: '0-0-1'
        },
      ]
    },
    {
      title: 'DESTREZA',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'OPERACIONES Y RACIONAMIENTO LÓGICO MATEMÁTICO',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'RESOLUCIÓN Y SOLUCIÓN DE PROBLEMAS',
          value: '0-0-2',
          key: '0-0-2'
        },
      ]
    },
    {
      title: 'COMUNICACIÓN',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
          key: '0-0-2'
        }
      ]
    },
  ];
  @ViewChild('inputElement', {static: false}) inputElement?: ElementRef;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  loading = false;
  avatarUrl = 'https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-1/278281590_5606239569405958_487359441270392425_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ZpDPNoOJMi4AX9PUQyS&_nc_ht=scontent.fmex28-1.fna&oh=00_AfB2FnQj1GkSbwNKJ7y2jRaKpOxouBXQQcB4HCQHBglirQ&oe=6397AAE2';

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  onExpandChange(e: NzFormatEmitEvent): void {
    const node = e.node;
    if (node && node.getChildren().length === 0 && node.isExpanded) {
      this.loadNode().then(data => {
        node.addChildren(data);
      });
    }
  }

  loadNode(): Promise<NzTreeNodeOptions[]> {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            {title: 'Child Node', key: `${new Date().getTime()}-0`},
            {title: 'Child Node', key: `${new Date().getTime()}-1`}
          ]),
        1000
      );
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.addField();
  }

  // tslint:disable-next-line:variable-name
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      // tslint:disable-next-line:no-non-null-assertion
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    })

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line:no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        // tslint:disable-next-line:no-non-null-assertion
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
}

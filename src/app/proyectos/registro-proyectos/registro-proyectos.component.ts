import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
// @ts-ignore
import {NzMessageService} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyectos.component.html',
  styleUrls: ['./registro-proyectos.component.css']
})
export class RegistroProyectosComponent implements OnInit {

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private http: HttpClient) {
    this.renderPreView();
  }
  preview?: SafeHtml;

  validateForm!: FormGroup;

  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  demoValue = 5000;

  inputValue?: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [
    'IRIS SAMAHI ALMARAZ MARTINEZ',
    'ELIANETH ARAGON ARARON',
    'KEVIN JAVIER ARANGO LARA',
    'GENARO JOSE MARTINEZ',
    'DAFNE ESMERALDA ENRIQUEZ CARRILLO',
    'ALEXIS YAHIR FRANCO JIMENEZ',
    'LETICIA CORTEZ ZARATE',
    'GAEL CUEVAS MENDOZA',
    'EDUARDO EMILIO LOPEZ LOPEZ',
    'AGUSTIN OLLIN GARCIA',
    'ANDRES JAHIR',
    'PATRICIA EUGENIO LOPEZ',
    'ANGEL FERNANDO ANTONIO CARLOCK',
    'ALBERTO LOPEZ HERNANDEZ',
    'FRANCISCO ANTONIO ROSAS CARRILLO'
  ];
  selectedUser?: string;
  isLoading = false;

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

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.validateForm = this.fb.group({});
    this.addField();


  }

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


  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

  log(value: string[]): void {
    console.log(value);
  }

  formatterDollar = (value: number): string => `$ ${value}`;
  parserDollar = (value: string): string => value.replace('$ ', '');

  getRegExp(prefix: string | string[]): RegExp {
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');

    if (prefixArray.length > 1) {
      prefixToken = `[${prefixToken}]`;
    }

    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
  }

  renderPreView(): void {
    if (this.inputValue) {
      const regex = this.getRegExp('@');
      const previewValue = this.inputValue.replace(
        regex,
        match => `<a target="_blank" href="https://github.com/${match.trim().substring(1)}">${match}</a>`
      );
      this.preview = this.sanitizer.bypassSecurityTrustHtml(previewValue);
    }
  }

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }
}

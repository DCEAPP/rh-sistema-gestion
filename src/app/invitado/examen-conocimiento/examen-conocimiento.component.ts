import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examen-conocimiento',
  templateUrl: './examen-conocimiento.component.html',
  styleUrls: ['./examen-conocimiento.component.css']
})
export class ExamenConocimientoComponent implements OnInit {

  constructor() {
  }

  radioValue = '';

  current = 0;

  index = 'First-content';


  ngOnInit(): void {
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'INICIO';
        break;
      }
      case 1: {
        this.index = 'EN PROCESO';
        break;
      }
      case 2: {
        this.index = 'TERMINAR';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}

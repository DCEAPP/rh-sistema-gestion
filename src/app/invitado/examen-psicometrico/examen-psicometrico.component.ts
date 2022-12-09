import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examen-psicometrico',
  templateUrl: './examen-psicometrico.component.html',
  styleUrls: ['./examen-psicometrico.component.css']
})
export class ExamenPsicometricoComponent implements OnInit {
  radioValue0 = 'A';
  radioValue1 = 'A';
  radioValue2 = 'A';
  radioValue3 = 'A';
  radioValue4 = 'A';
  radioValue5 = 'A';
  radioValue6 = 'A';
  radioValue7 = 'A';
  radioValue8 = 'A';
  radioValue9 = 'A';
  radioValue10 = 'A';
  radioValue11 = 'A';
  radioValue12 = 'A';
  radioValue13 = 'A';
  radioValue14 = 'A';
  radioValue15 = 'A';
  radioValue16 = 'A';
  radioValue17 = 'A';
  radioValue18 = 'A';
  radioValue19 = 'A';
  radioValue20 = 'A';
  radioValue21 = 'A';
  radioValue22 = 'A';
  radioValue23 = 'A';

  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

  current = 0;

  index = 'First-content';

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
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

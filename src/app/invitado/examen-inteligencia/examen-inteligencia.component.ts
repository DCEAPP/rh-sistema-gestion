import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-examen-inteligencia',
  templateUrl: './examen-inteligencia.component.html',
  styleUrls: ['./examen-inteligencia.component.css']
})
export class ExamenInteligenciaComponent implements OnInit {

  validateForm: FormGroup;
  radioValue = 'A'; radioValue1 = 'A'; radioValue2 = 'A'; radioValue3 = 'A'; radioValue4 = 'A';
  radioValue9 = 'A'; radioValue8 = 'A'; radioValue7 = 'A'; radioValue6 = 'A'; radioValue5 = 'A';
  radioValue10 = 'A'; radioValue11 = 'A'; radioValue12 = 'A'; radioValue13 = 'A'; radioValue14 = 'A';
  radioValue15 = 'A'; radioValue16 = 'A'; radioValue17 = 'A'; radioValue18 = 'A'; radioValue19 = 'A';
  radioValue20 = 'A'; radioValue21 = 'A'; radioValue22 = 'A'; radioValue23 = 'A'; radioValue24 = 'A';
  radioValue25 = 'A'; radioValue26 = 'A'; radioValue27 = 'A'; radioValue28 = 'A'; radioValue29 = 'A';
  radioValue30 = 'A'; radioValue31 = 'A'; radioValue32 = 'A'; radioValue33 = 'A'; radioValue34 = 'A';
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

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout?.value === 'horizontal';
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      fieldA: [null, [Validators.required]],
      filedB: [null, [Validators.required]]
    });
  }

}

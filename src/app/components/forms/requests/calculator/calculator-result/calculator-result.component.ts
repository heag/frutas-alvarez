import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  employees: number;
  deliveries: number;
}

@Component({
  selector: 'calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})

export class CalculatorResultComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);

  employees: number;
  deliveries: number;
  boxes: number;
  peoplePerBox = 35;

  // 14 empleados/1 caja/1 entrega

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private router: Router) {
    this.employees = data.employees;
    this.deliveries = data.deliveries;
    this.boxes = Math.round((data.employees / this.peoplePerBox) * data.deliveries); // TODO
    if (this.boxes === 0) {
      this.boxes = 1;
    }
  }

  ngOnInit() {
  }

  redirectToRequest() {
    const navigationParams: NavigationExtras = {
      queryParams: {
        'employees': this.employees,
        'deliveries': this.deliveries
      }
    };

    this.router.navigate(['pedido'], navigationParams);
  }

  getErrorMessages(controlName: string) {
    switch (controlName) {
      case 'email':
        return this.email.hasError('required') ? 'Ingresa un correo electrónico' :
          this.email.hasError('email') ? 'Correo electrónico inválido' :
            '';
      case 'name':
        return this.name.hasError('required'), 'Ingresa un nombre';
      case 'tel':
        return this.name.hasError('required'), 'Ingresa un número telefónico  ';
      default:
        break;
    }
  }

}

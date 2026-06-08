import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective } from 'ngx-mask';
import { cnpjValidator } from '../../shared/validators/cnpj.validator';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-novo-contato',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './novo-contato.html',
  styleUrl: './novo-contato.scss',
})
export class NovoContato {
  cnpjFormControl = new FormControl('', [Validators.required, cnpjValidator()]);
  matcher = new MyErrorStateMatcher();
}

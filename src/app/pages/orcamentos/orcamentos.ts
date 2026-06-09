import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

interface ModeloEquipamento  {
  modelo: string;
  descricao: string;
};

@Component({
  selector: 'app-orcamentos',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './orcamentos.html',
  styleUrl: './orcamentos.scss',
})
export class Orcamentos {
  form = new FormGroup({
    dateControl: new FormControl<Date | null>(new Date(), {
      validators: [Validators.required],
    }),
  });

  modelosEquipamentos: ModeloEquipamento[] = [
    {
      modelo: 'PHD 1000',
      descricao: '02 lanças hidráulicas e 02 lanças mecânicas',
    },
    {
      modelo: 'PHD 3602',
      descricao: '01 lança hidráulica e 01 lança mecânica',
    },
    {
      modelo: 'PHD 4003',
      descricao: '01 lança hidráulica e 01 lança mecânica',
    },
    {
      modelo: 'PHD 460EX',
      descricao: '02 lanças hidráulicas e 01 lança mecânica (longas + longas)',
    },
    {
      modelo: 'PHD 5003',
      descricao: '02 lanças hidráulicas e 01 lança mecânica',
    },
    {
      modelo: 'PHD 5003EX',
      descricao: '02 lanças hidráulicas e 01 lança mecânica',
    },
    {
      modelo: 'PHD 6003',
      descricao: '02 lanças hidráulicas e 01 lança mecânica',
    },
  ];
}

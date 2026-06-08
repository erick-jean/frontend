import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cnpj = (control.value || '').replace(/\D/g, '');

    if (!cnpj) {
      return null;
    }

    if (cnpj.length !== 14) {
      return { cnpjInvalid: true };
    }

    if (/^(\d)\1+$/.test(cnpj)) {
      return { cnpjInvalid: true };
    }

    let tamanho = 12;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);

    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado !== Number(digitos.charAt(0))) {
      return { cnpjInvalid: true };
    }

    tamanho = 13;
    numeros = cnpj.substring(0, tamanho);

    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado !== Number(digitos.charAt(1))) {
      return { cnpjInvalid: true };
    }

    return null;
  };
}
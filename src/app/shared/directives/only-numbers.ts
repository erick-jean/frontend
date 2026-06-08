import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: true,
})
export class OnlyNumbersDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '');

    input.dispatchEvent(new Event('input'));
  }
}

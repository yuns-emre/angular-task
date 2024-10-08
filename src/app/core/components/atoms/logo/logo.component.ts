import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `
    <img [src]="src" alt="Rast Mobile" width="100"/>
  `,
  styles: ``
})
export class LogoComponent {
  @Input() src: string = '';
}

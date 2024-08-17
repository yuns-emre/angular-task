import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [ngClass]="textClass">{{ textLabel }}</p>
  `,
  styles: `
    .row-number-title{
      color:rgba(116, 75, 252, 1);
      font-size:16px;
      font-weight:500;
    }
  `
})
export class AtomTextComponent {
  @Input() textClass: string = '';
  @Input() textLabel: string = '';
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [ngClass]="textClass">{{ textLabel }}</p>
  `,
  styles: ``
})
export class AtomTextComponent {
  @Input() textClass: string = '';
  @Input() textLabel: string = '';
}

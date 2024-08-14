import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [type]="type"  [ngStyle]="{'width': isExpanded ? '100%' : ''}" [ngClass]="className" class="primary-btn">{{ label }}</button>
  `,
  styles: `
  `
})
export class ButtonComponent {
  @Input() label: string = 'Submit';
  @Input() type: string = 'submit';
  @Input() className: string = '';
  @Input() isExpanded: boolean = false;
}

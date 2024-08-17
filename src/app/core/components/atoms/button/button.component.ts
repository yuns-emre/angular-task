import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [type]="type"  [ngStyle]="{'width': isExpanded ? '100%' : ''}" [ngClass]="className" [class]="className">{{ label }}</button>
  `,
  styles: `

    .modal-save-btn{
      background: rgba(116, 75, 252, 1);
      border-radius: 32px;
      border: none;
      padding: 9px 18px;
      font-size: 14px;
      font-weight: 400;
      color: white;
    }

    .modal-cancel-btn{
      background: rgba(245, 247, 255, 1);
      border-radius: 32px;
      border: none;
      padding: 9px 18px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(116, 75, 252, 1);;
    }
  `
})
export class ButtonComponent {
  @Input() label: string = 'Submit';
  @Input() type: string = 'submit';
  @Input() className: string = '';
  @Input() isExpanded: boolean = false;
}

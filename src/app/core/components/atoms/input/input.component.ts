import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  template: `
    <input class="input-area" [type]="type" [ngStyle]="{'width': isExpanded ? '90%' : ''}" [placeholder]="placeholder" [formControl]="control" [ngClass]="className"/>
  `,
  styles: `
    .input-area{
      border: 1px solid rgba(116, 75, 252, 1);
      border-radius: 48px;
      padding: 12px 24px;
      height: 32px;
      font-size: 20px;
      width: 90%;
      margin: 0;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() className: string = '';
  @Input() isExpanded: boolean = true;
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  template: `
    <input class="input-area" (change)="changeValueController(model)" [(ngModel)]="model" [type]="type" [ngStyle]="{'width': isExpanded ? '90%' : ''}" [id]="'item-'+placeholder" [placeholder]="placeholder" [formControl]="control" [ngClass]="className"/>
  `,
  styles: `
    .input-area{
      border: 1px solid rgba(116, 75, 252, 1);
      border-radius: 48px;
      padding: 12px 0 12px 24px;
      height: 32px;
      font-size: 20px;
      width: 90%;
      margin: 0;
    }

    .search-container{
      border: none !important;
      height: 32px !important;
      border-radius: 32px 0 0 32px !important;
    }

    .searc-container::placeholder {
      color: rgba(140, 140, 140, 1);
      font-size: 16px !important;
      opacity: 1;
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
  @Input() isChangeControl: boolean = false;
  @Output() changeValue = new EventEmitter<string>();

  model: string = "";

  changeValueController(text: string) {
    if (this.isChangeControl == true) {
      this.changeValue.emit(text);
    }
  }
}

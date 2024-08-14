import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "../../atoms/input/input.component";

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent
  ],
  template: `
  <div class="form-group">
    <label class="input-label">{{ label }}</label>
    <app-input [type]="type" [placeholder]="placeholder" [control]="control" className="form-control" class="input-component"></app-input>
  </div>
  `,
  styles: `
    .form-group{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .input-label{
      font-size:24px;
      font-weight: 500;
    }
  `
})
export class FormGroupComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
}

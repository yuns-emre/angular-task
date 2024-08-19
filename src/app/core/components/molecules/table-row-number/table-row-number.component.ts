import { Component, Input } from '@angular/core';
import { AtomTextComponent } from "../../atoms/atom-text/atom-text.component";
import { InputComponent } from "../../atoms/input/input.component";

@Component({
  selector: 'app-table-row-number',
  standalone: true,
  imports: [AtomTextComponent, InputComponent],
  template: `
    <app-atom-text [textClass]="'row-number-title'" [textLabel]="title"></app-atom-text>
    <div class="input-row">
      {{inputValue}} rows
      <div class="btn-container">
        <button (click)="increase()"><img src="/assets/icons/increase.svg" width="16"></button>
        <button (click)="decrease()"><img src="/assets/icons/decrease.svg" width="16"></button>
      </div>
    </div>
  `,
  styles: `
    .input-row{
      border: 1px solid rgba(207, 192, 255, 1);
      border-radius: 32px;
      padding: 10px 16px;
      height: 32px;
      font-size: 16px;
      font-weight: 400;

      display: flex;
      align-items: center;
      gap: 16px;
   
      .btn-container{
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        align-items: center;
        
        button {
          background: none;
          border: none;
          padding: 0;
        }

        button:hover{
          background: rgba(207, 192, 255, 1);
        }
      }
    }

  `
})
export class TableRowNumberComponent {
  @Input() title: string = "";
  @Input() inputValue: any;

  increase() {
    console.log('Row Increase Btn');
  }

  decrease() {
    console.log('Row Decrease Btn');
  }
}

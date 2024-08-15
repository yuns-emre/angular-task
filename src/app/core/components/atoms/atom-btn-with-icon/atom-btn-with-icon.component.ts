import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-atom-btn-with-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [type]="type" [class]="className" (click)="send()" >
      {{name}}

      <ng-container *ngIf="isWithIcon">
        <img [src]="icon"/>
      </ng-container> 
    </button>
  `,
  styles: `
    .search-btn{
      background: rgb(116, 75, 252);
      border:none;
      height: 56px;
      aspect-ratio: 1 / 1;
      border-radius: 0 32px 32px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-btn:hover{
      opacity:0.7;
    }

    .search-btn:active{
      background: rgb(82 53 177);
    }
    
    .new-link-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;
      gap: 12px;

      img{
        color:white !important;
      }
    }
  `
})
export class AtomBtnWithIconComponent {
  @Input() type: "submit" | "menu" | "reset" | "button" = "button";
  @Input() name: string = "";
  @Input() icon: string = "";
  @Input() isWithIcon: boolean = false;
  @Output() callFunction = new EventEmitter();;
  @Input() className: string = "primary-btn";

  searchText: string = "";

  send() {
    this.callFunction.emit();
  }
}

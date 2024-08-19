import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-atom-btn-with-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <button [type]="type" [class]="className" (click)="send()" >
      {{name}}

      <ng-container *ngIf="isWithIcon">
        <mat-icon [fontIcon]="icon"></mat-icon>
      </ng-container> 
    </button>
  `,
  styles: `
    button{
      cursor:pointer;
    }
    .search-btn{
      background: rgb(116, 75, 252);
      border:none;
      height: 48px;
      aspect-ratio: 1 / 1;
      border-radius: 0 32px 32px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      mat-icon{
        color:white !important;
      }
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
      min-height: 0 !important; 
      min-width: 0 !important;

      mat-icon{
        color:white !important;
      }
    }

    .logout-btn{
      color: #ff7a7a;
      border: none;
      border-radius: 32px;
      background: #f0f0f0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
      padding: 8px 16px;
      gap: 4px;

      mat-icon{
        font-size:18px;
        width:18px;
        height:18px;
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

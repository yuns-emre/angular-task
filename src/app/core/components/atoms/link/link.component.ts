import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container *ngIf='this.route.indexOf("https://") == 0;else other'>
      <a  [href]="route" target="_blank"  [ngClass]="className">
        {{text}}
      </a>
    </ng-container>

    <ng-template #other>
      <a  [routerLink]="route"  [ngClass]="className">
        {{text}}
      </a>
    </ng-template>  
  `,
  styles: `
    .link {
      color: #007bff;
      text-decoration: none;
    }

    .link:hover {
      text-decoration: underline;
    }

    .link-header {
      color: rgba(0, 0, 0, 1) !important;
    }
  `
})
export class TextBtnComponent {
  @Input() route: string = '';
  @Input() text: string = '';
  @Input() className: string = 'link';

  constructor() {
  }

  // ngOnInit(): void {
  //   console.log(this.route.indexOf("https://"));
  // }
}

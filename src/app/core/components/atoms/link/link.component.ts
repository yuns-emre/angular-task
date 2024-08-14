import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="route" class="link" [ngClass]="className">
      <ng-content></ng-content>
    </a>
  `,
  styles: `
    .link {
      color: #007bff;
      text-decoration: none;
    }

    .link:hover {
      text-decoration: underline;
    }
  `
})
export class TextBtnComponent {
  @Input() route: string = '';
  @Input() className: string = '';
}

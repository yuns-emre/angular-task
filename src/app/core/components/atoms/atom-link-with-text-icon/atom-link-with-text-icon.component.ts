import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-atom-link-with-text-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div [class]="linkClasses">
      <a [href]="link">
        {{text}}
        <img [src]="icon" class="social-icon" />
      </a>
    <div>
  `,
  styles: `
    .social-icon{
      height: 14px;
    }
  `
})
export class AtomLinkWithTextIconComponent {
  @Input() text: string = '';

  @Input() link: string = '';

  @Input() linkClasses: string = 'link-classes';

  @Input() icon: string = "";
}

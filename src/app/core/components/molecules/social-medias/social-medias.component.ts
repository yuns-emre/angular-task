import { Component } from '@angular/core';
import { AtomLinkWithTextIconComponent } from "../../atoms/atom-link-with-text-icon/atom-link-with-text-icon.component";
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-medias',
  standalone: true,
  imports: [AtomLinkWithTextIconComponent, CommonModule],
  template: `
    <ng-container *ngFor="let item of socialMediaItems">
      <app-atom-link-with-text-icon [link]="item.link" [icon]="item.icon" linkClasses="social-media-icons">
      </app-atom-link-with-text-icon>
    </ng-container>
  `,
  styles: `
  `
})
export class SocialMediasComponent {
  socialMediaItems: any[] = [];

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.getAllSocialMediaItems();
  }

  getAllSocialMediaItems() {
    this.socialMediaItems = this.dataService.getAllSocialMediaItems();
  }
}

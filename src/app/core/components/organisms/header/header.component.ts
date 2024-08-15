import { Component } from '@angular/core';
import { LogoComponent } from "../../atoms/logo/logo.component";
import { HeaderLinksComponent } from "../../molecules/header-links/header-links.component";
import { SocialMediasComponent } from "../../molecules/social-medias/social-medias.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [LogoComponent, HeaderLinksComponent, SocialMediasComponent],
})
export class HeaderComponent {

}

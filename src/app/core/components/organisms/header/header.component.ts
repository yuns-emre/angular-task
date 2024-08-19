import { Component } from '@angular/core';
import { LogoComponent } from "../../atoms/logo/logo.component";
import { HeaderLinksComponent } from "../../molecules/header-links/header-links.component";
import { SocialMediasComponent } from "../../molecules/social-medias/social-medias.component";
import { CommonModule } from '@angular/common';
import { AtomBtnWithIconComponent } from '../../atoms/atom-btn-with-icon/atom-btn-with-icon.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    LogoComponent,
    HeaderLinksComponent,
    SocialMediasComponent,
    AtomBtnWithIconComponent,
  ],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(["auth"]);
    });
  }
}

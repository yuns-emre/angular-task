import { Component } from '@angular/core';
import { LogoComponent } from "../../atoms/logo/logo.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  templateUrl: "./auth-layout.component.html",
  styleUrl: "./auth-layout.component.scss",
  imports: [LogoComponent],
})
export class AuthLayoutComponent {

}

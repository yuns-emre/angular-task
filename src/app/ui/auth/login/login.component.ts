import { Component } from '@angular/core';
import { AuthLayoutComponent } from "../../../core/components/templates/auth-layout/auth-layout.component";
import { LoginFormComponent } from "../../../core/components/organisms/login-form/login-form.component";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [AuthLayoutComponent, LoginFormComponent],
})
export class LoginComponent {

}

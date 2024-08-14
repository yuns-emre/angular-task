import { Component } from '@angular/core';
import { AuthLayoutComponent } from "../../../core/components/templates/auth-layout/auth-layout.component";
import { RegisterFormComponent } from "../../../core/components/organisms/register-form/register-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [AuthLayoutComponent, RegisterFormComponent],
})
export class RegisterComponent {

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { TextBtnComponent } from "../../atoms/link/link.component";
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
  imports: [FormGroupComponent, ButtonComponent, ReactiveFormsModule, TextBtnComponent],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const response = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password,
      );

      if (response.success) {
        this.router.navigate(['/home']);
      } else {
        console.log(response.message);
      }
    } else {
      console.log("Form is invalid!!!");
    }
  }
}

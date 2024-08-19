import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { TextBtnComponent } from "../../atoms/link/link.component";
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
  imports: [
    CommonModule,
    FormGroupComponent,
    ButtonComponent,
    ReactiveFormsModule,
    TextBtnComponent,
  ],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Value:", this.loginForm.value);
      const res = await this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password,
      );
      console.log("res:", res);

      if (res.success) {
        this.router.navigate(['/home']);
      } else {
        this.toastr.error(
          'Girdiğiniz şifre veya mail yanlıştır. Lütfen tekrar deneyiniz!!!',
          'Dikkat!',
          {
            positionClass: "toast-bottom-right"
          }
        );
      }

    } else {
      console.log("Form is invalid!!!");
    }
  }
}

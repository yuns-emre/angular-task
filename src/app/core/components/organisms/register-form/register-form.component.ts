import { Component } from '@angular/core';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextBtnComponent } from "../../atoms/link/link.component";
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  templateUrl: "./register-form.component.html",
  styleUrl: "./register-form.component.scss",
  imports: [FormGroupComponent, ButtonComponent, CommonModule, ReactiveFormsModule, TextBtnComponent],
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      try {
        const { email, password, confirmPassword, name } = this.registerForm.value;
        await this.authService.register(email, password, confirmPassword, name);
        this.router.navigate(['auth/login']);
      } catch (error) {
        console.error('Registration Error:', error);
      }
    }
  }
}

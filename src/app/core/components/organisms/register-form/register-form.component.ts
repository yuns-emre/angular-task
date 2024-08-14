import { Component } from '@angular/core';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextBtnComponent } from "../../atoms/link/link.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  templateUrl: "./register-form.component.html",
  styleUrl: "./register-form.component.scss",
  imports: [FormGroupComponent, ButtonComponent, CommonModule, ReactiveFormsModule, TextBtnComponent],
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}

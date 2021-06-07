import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { phoneNumberValidator } from './validators/phone-number-validator';
import { RegisterService } from './services/register.service';
import { User } from '../../users/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  registerResponse: string = '';

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: [
        '',
        phoneNumberValidator(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        ),
      ],
    });
  }

  onSubmit() {
    const newUser: User = { ...this.registerForm.value, role: 'User' };
    this.registerResponse = this.registerService.registerUser(newUser);
  }
}

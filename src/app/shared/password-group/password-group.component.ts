import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-group',
  templateUrl: './password-group.component.html',
  styleUrls: ['./password-group.component.scss'],
})
export class PasswordGroupComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  constructor() {}

  get confirmPassword(): FormControl {
    return this.parentForm?.get('confrimPassword') as FormControl;
  }

  ngOnInit(): void {
    console.log(this.parentForm.get('confirmPassword')?.dirty);
  }
}

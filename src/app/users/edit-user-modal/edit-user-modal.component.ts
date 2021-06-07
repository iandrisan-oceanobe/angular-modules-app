import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsersTableComponent } from '../users-table/users-table.component';
import { phoneNumberValidator } from '../../register/register/validators/phone-number-validator';
import { roles } from '../models/user.model';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  editForm!: FormGroup;
  roles: { value: roles; viewValue: roles }[] = [
    { value: 'User', viewValue: 'User' },
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'ReadOnly Admin', viewValue: 'ReadOnly Admin' },
  ];

  constructor(
    public dialogRef: MatDialogRef<UsersTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      email: [this.data.user.email, [Validators.email, Validators.required]],
      name: [
        this.data.user.name,
        [Validators.required, Validators.minLength(4)],
      ],
      phone: [
        this.data.user.phone,
        phoneNumberValidator(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        ),
      ],
      role: [this.data.user.role],
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

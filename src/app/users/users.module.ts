import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@fa/material/material.module';
import { UsersComponent } from '@fa/users/users/users.component';
import { UsersRoutingModule } from '@fa/users/users-routing.module';
import { UsersTableComponent } from '@fa/users/users-table/users-table.component';
import { EditUserModalComponent } from '@fa/users/edit-user-modal/edit-user-modal.component';
import { SharedModule } from '@fa/shared/shared.module';
import { ChangePasswordModalComponent } from '@fa/users/change-password-modal/change-password-modal.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    EditUserModalComponent,
    ChangePasswordModalComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}

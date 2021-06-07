import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationComponent } from './authentication/authentication.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
// import { SharedModule } from '@fa/shared';
import { AuthenticateRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthenticationModule {}

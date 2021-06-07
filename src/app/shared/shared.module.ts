import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomInputDefComponent } from './custom-input-def/custom-input-def.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { PasswordGroupComponent } from './password-group/password-group.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    CustomInputDefComponent,
    CustomSelectComponent,
    PasswordGroupComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    PageNotFoundComponent,
    CommonModule,
    CustomInputDefComponent,
    CustomSelectComponent,
    PasswordGroupComponent,
  ],
})
export class SharedModule {}

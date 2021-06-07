import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NotAuthorizedRoutingModule } from './not-authorized-routing';

@NgModule({
  declarations: [NotAuthorizedComponent],
  imports: [CommonModule, NotAuthorizedRoutingModule],
})
export class NotAuthorizedModule {}

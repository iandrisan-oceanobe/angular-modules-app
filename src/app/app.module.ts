import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from '@fa/app/app-routing.module';
import { AppComponent } from '@fa/app/app.component';
import { SharedModule } from '@fa/shared/shared.module';
import { MaterialModule } from '@fa/material/material.module';
import { HeaderComponent } from '@fa/navigation/header/header.component';
import { SidenavListComponent } from '@fa/navigation/sidenav-list/sidenav-list.component';

import { environment } from '../environments/environment';
import { combinedReducers } from './state/combine.reducers';
import { LoadUsersEffect } from '@fa/state/users/load-users.effect';
import { DeleteUserEffect } from '@fa/state/users/delete-user.effect';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.forRoot(combinedReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LoadUsersEffect, DeleteUserEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { AdminModule } from './admin/admin.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CrisisCenterModule,
    HeroesModule,
    LoginRoutingModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

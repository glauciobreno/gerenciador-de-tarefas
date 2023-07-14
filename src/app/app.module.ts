import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Adicione essa linha
import { FormsModule } from '@angular/forms';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, BoasVindasComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule], // Use AppRoutingModule em vez de RouterModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

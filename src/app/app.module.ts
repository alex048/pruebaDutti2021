import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
//import { PrincipalComponent } from './shared/principal/principal.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot({
      ships: reducer
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

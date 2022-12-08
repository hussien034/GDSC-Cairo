import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { CoursesComponent } from './courses/courses.component';
import { GooglesolutionComponent } from './googlesolution/googlesolution.component';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxPopper } from 'angular-popper';

ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursesComponent,
    GooglesolutionComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgwWowModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

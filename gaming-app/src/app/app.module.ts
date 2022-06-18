import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameTabListComponent } from './game-tab-list/game-tab-list.component';
import { GameResultComponent } from './game-result/game-result.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { ForgetUsernamePasswordComponent } from './forget-username-password/forget-username-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    GameListComponent,
    GameTabListComponent,
    GameResultComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgetUsernamePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

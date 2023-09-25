import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SidebarModule } from 'ng-sidebar';
import { myHttpInterceptor } from './intercepter/http.interceptor';
import{HTTP_INTERCEPTORS} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
// import { FooterComponent } from './common/footer/footer.component';
import { ApiDataService } from './services/dataservice/api-data.service';
import { GlobalService } from './services/global.service';
import { HeaderLoginComponent } from './common/header-login/header-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NumberValidateDirective } from './directory/number-validate.directive';
import { NumberValidateDirective } from 'src/app/directory/number-validate.directive';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    HeaderLoginComponent,
    NumberValidateDirective,
    
   
  
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule, ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),NgOtpInputModule,
    ModalModule.forRoot()
   
  ],
  providers: [GlobalService,ApiDataService,  HttpClientModule,{
    provide: HTTP_INTERCEPTORS,
    useClass: myHttpInterceptor,
    multi: true
   },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

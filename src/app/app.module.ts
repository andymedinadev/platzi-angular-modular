import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TimeInterceptor } from 'src/app/interceptors/time.interceptor';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

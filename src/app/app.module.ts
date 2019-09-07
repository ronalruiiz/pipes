import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';

import {UrlsecurePipe} from './pipes/urlsecure.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    UrlsecurePipe,
    UrlsecurePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

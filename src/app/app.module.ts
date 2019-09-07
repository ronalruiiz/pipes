import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';

import {UrlsecurePipe} from './pipes/urlsecure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    UrlsecurePipe,
    UrlsecurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

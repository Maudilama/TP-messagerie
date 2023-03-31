import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { ListeMessageComponent } from './liste-message/liste-message.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    FormMessageComponent,
    ListeMessageComponent,
    ListePersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

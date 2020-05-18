import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { AutocompleterComponent } from './components/autocompleter/autocompleter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe,
    AutocompleterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

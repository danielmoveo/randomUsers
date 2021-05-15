import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContactsPageComponent } from './views/contacts-page/contacts-page.component';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { ContactCardComponent } from './components/contacts/contact-card/contact-card.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsPageComponent,
    ContactDetailsPageComponent,
    ContactCardComponent,
    ContactsListComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

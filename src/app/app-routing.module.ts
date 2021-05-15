import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from './views/contacts-page/contacts-page.component';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/contacts", pathMatch: "full" }, 
  {
    path: "contacts",
    component: ContactsPageComponent,
  },
  {
    path: "contact-details/:id",
    component: ContactDetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeBodyComponent } from './homeBody/home-body.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponentComponent } from './notification-component/notification-component.component';
import { DownloadComponentComponent } from './download-component/download-component.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';

const routes: Routes = [
  {
    path : '', pathMatch: "full",
    component : HomeBodyComponent,
  },

  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { LoginComponent } from './comps/login/login.component';
import { ContactComponent } from './comps/contact/contact.component';
import { HomeComponent } from './comps/home/home.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './comps/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"about-us" ,component: AboutusComponent},
{path: "contact-us",component: ContactComponent},
{path:"login", component: LoginComponent },
{path:"dashboard" , component: DashboardComponent , canActivate: [AuthGuard],  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

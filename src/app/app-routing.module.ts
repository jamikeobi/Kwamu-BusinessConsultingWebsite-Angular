import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { InsightsComponent } from './pages/insights/insights/insights.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'industries', component: IndustriesComponent},
  {path:'insights', component: InsightsComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

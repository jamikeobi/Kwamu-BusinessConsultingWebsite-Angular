import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/resuseableComponents/header/header/header.component';
import { FooterComponent } from './shared/resuseableComponents/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { InsightsComponent } from './pages/insights/insights/insights.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { AdvisoryComponent } from './pages/services/advisory/advisory/advisory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    IndustriesComponent,
    InsightsComponent,
    AboutComponent,
    ContactComponent,
    AdvisoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

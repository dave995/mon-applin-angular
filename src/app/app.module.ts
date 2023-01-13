import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcometoComponent } from './welcometo/welcometo.component';
import { TeamComponent } from './team/team.component';
import { WorktoComponent } from './workto/workto.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CardmobileComponent } from './cardmobile/cardmobile.component';
import { BlogComponent } from './blog/blog.component';
import { ServiceEndComponent } from './service-end/service-end.component';
import { FooterAppComponent } from './footer-app/footer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcometoComponent,
    TeamComponent,
    WorktoComponent,
    ServicesComponent,
    TestimonialComponent,
    CardmobileComponent,
    BlogComponent,
    ServiceEndComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

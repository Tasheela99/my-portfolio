import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        PortfolioComponent,
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        HobbiesComponent,
        LandingPageComponent
    ],
    exports: [
        PortfolioComponent
    ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PortfolioModule { }

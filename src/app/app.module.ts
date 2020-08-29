import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ParticlesModule} from 'angular-particle';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { TeamComponent } from './team/team.component';
import { SummaryComponent } from './summary/summary.component';
import { CitationsComponent } from './citations/citations.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    ProjectDescriptionComponent,
    TeamComponent,
    SummaryComponent,
    CitationsComponent,
    DownloadsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FaqItemComponent } from './faq/faq-item/faq-item.component';
import {DropDownTreeModule} from '@syncfusion/ej2-angular-dropdowns';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import { FooterComponent } from './footer/footer.component';
import {NgSelect2Module} from 'ng-select2';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatDialogModule, MatTabsModule, MatTooltipModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {CommonModule} from "@angular/common";
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;
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
    FaqComponent,
    FaqItemComponent,
    HomeComponent,
    ExploreComponent,
    FooterComponent,
    DialogContentComponent
  ],
    imports: [
        BrowserModule,
        NgSelect2Module,
        FormsModule,
        NgbModule,
        ParticlesModule,
        DropDownTreeModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TreeViewModule,
        MatButtonToggleModule,
        MatButtonModule,
        HttpClientModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        CommonModule,
        PlotlyModule
    ],
  providers: [],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

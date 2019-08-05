import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';

import { MyngmodulesRoutingModule } from './myngmodules/myngmodules-routing.module';
import { AboutComponent } from './home/about/about.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ServicesComponent } from './home/services/services.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { CareersComponent } from './home/careers/careers.component';
import { ContactComponent } from './home/contact/contact.component';
import { BrandingComponent } from './home/branding/branding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    DashboardComponent,
    ServicesComponent,
    PortfolioComponent,
    CareersComponent,
    ContactComponent,
    BrandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyngmodulesRoutingModule,HttpClientModule,HttpModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
    ServiceWorkerModule.register(
      '/ngsw-worker.js',
      { enabled: environment.production }
    ),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

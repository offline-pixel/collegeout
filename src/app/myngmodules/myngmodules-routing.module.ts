import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
// import { HeaderComponent } from '../home/header/header.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { BodyComponent } from '../home/body/body.component';
import { AboutComponent } from '../home/about/about.component';
import { ServicesComponent } from '../home/services/services.component';
import { BrandingComponent } from '../home/branding/branding.component';
import { PortfolioComponent } from '../home/portfolio/portfolio.component';
import { CareersComponent } from '../home/careers/careers.component';
import { ContactComponent } from '../home/contact/contact.component';
// import { FooterComponent } from '../home/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent,
    children:[
      { path: '', component: BodyComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'services/branding', component: BrandingComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'contact', component: ContactComponent },
    ]}//,
  // { path: '**', component: BodyComponent }
]
 
@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, {
      enableTracing: false,
      scrollPositionRestoration:'top'
    })
  ],
  exports: [ RouterModule ]
})

export class MyngmodulesRoutingModule { }

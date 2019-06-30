import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '.././home/header/header.component';
import { BodyComponent } from '.././home/body/body.component';
import { FooterComponent } from '.././home/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent,
        children:[
          { path: '', component: BodyComponent }
        ]}//,
  // { path: '**', component: FooterComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  exports: [ RouterModule ]
})

export class MyngmodulesRoutingModule { }

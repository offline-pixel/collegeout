import { Component, ViewChild } from '@angular/core';
// import { Router, RouterModule, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';
declare var gtag;
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  constructor(private swUpdate: SwUpdate){//private router:Router
     gtag('config', 'UA-122661218-3'//, {
    //   'page_path':event.urlAfterRedirects
    // }
    );
    // const navEvents = this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // )
    // navEvents.subscribe((event:NavigationEnd)=>{
    //   gtag('config', 'UA-122661218-3', {
    //     'page_path':event.urlAfterRedirects
    //   });      
    // })
  }
  ngOninit(){
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if(confirm("New version available. Update now ?")) { 
              window.location.reload();
          }
      });
    }
  }
}
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'navOpen')
  }

}

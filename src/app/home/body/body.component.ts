import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'navOpen')    
  }

}

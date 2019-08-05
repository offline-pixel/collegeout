import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'navOpen')
  }

}

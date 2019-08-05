import { Component, OnInit, Renderer2 } from '@angular/core';
// import { FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Http } from '@angular/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title:any
  fname:any
  lname:any
  cname:any
  email:any
  number:any
  city:any
  country:any
  message:any

  constructor(private renderer: Renderer2, private http:Http) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'navOpen')    
  }

  submit(){
    var temp = {
      title: this.title,
      fname: this.fname,
      lname: this.lname,
      cname: this.cname,
      email: this.email,
      number: this.number,
      city: this.city,
      country: this.country,
      message: this.message
    }
    console.log(temp)
    this.http.post("/email", temp).pipe(
      map(r => r.json())
    ).subscribe(el=>{
      console.log(el)
    })
  }
}

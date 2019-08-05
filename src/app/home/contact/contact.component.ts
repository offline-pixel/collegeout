import { Component, OnInit, Renderer2 } from '@angular/core';
// import { FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup } from '@angular/forms';

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

  constructor(private renderer: Renderer2) { }

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
    // if ( this.email || !this.email ){
    //   let pattern:any = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
    //   console.log(pattern.test(this.email))
    // }
    // if ( !this.title || !this.fname || !this.lname || !this.cname || !this.email || !this.number || !this.city || !this.country || !this.message ){
    //   console.log(true)
    // }
    console.log(temp)
  }
}

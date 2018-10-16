import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Message} from "../../model/model.message";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mess: Message = new Message();

  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }


  saveMessage () {
    this.authService.saveMessage(this.mess).subscribe(data => {
      alert('Message Sent ! we will contact you in 24 hours.') ;
      this.router.navigate(['users']) ;
    } , err => {
      console.log(err) ;
    }) ;
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
}}

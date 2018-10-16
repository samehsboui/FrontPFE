import { Component, OnInit } from '@angular/core';
import {Pan} from "../../model/model.pan";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-pan',
  templateUrl: './new-pan.component.html',
  styleUrls: ['./new-pan.component.css']
})
export class NewPanComponent implements OnInit {
  pan: Pan = new Pan();
  mode = 1 ;
  constructor(public panservice: AuthenticationService, private router:Router) { }

  ngOnInit() {
  }


  savePan () {
    this.panservice.savePan(this.pan).subscribe(data => {

      this.mode = 2 ;
    } , err => {
      console.log(err) ;
    }) ;
  }

  Logout(){
    this.panservice.logout();
    this.router.navigateByUrl('/login');
  }



}

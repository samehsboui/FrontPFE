import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
 @Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {

   closeResult: string;
   constructor( public authService:AuthenticationService, private router:Router) {
    }

  ngOnInit() {
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }




 }

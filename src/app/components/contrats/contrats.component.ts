import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }


  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}

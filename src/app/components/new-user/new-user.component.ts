import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {AppUser} from "../../model/model.appuser";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private  authService:AuthenticationService, public router: Router) { }

 appuser : AppUser =new AppUser();
  mode = 1 ;
  ngOnInit() {
  }

  saveUser () {
    this.authService.saveUser(this.appuser).subscribe(data => {
      alert('User added !') ;
      this.router.navigate(['users']) ;
    } , err => {
      console.log(err) ;
    }) ;
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  mode = 1 ;
  appuser: any = {} ;
  idUser: number ;

  constructor(public activatedRoute: ActivatedRoute ,public router: Router,public authService: AuthenticationService) {
    this.idUser = activatedRoute.snapshot.params['id'] ;

  }

  ngOnInit() {
    this.authService.getUser(this.idUser)
      .subscribe(data => {
        this.appuser = data ;
      } , err => {
        console.log(err) ;
      }) ;
  }
  updateUser () {
    this.authService.updateUser(this.appuser)
      .subscribe(data => {
        console.log(data) ;
        alert('User updated !') ;
        this.router.navigate(['users']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

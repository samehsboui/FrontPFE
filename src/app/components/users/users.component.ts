import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {AppUser} from "../../model/model.appuser";
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users;
  pageUsers: any ;
  motCle  = '';
  currentpage = 0 ;
  size = 10;
  pages: Array<number> ;
currentuser: string;
  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
      this.authService.getUserss(this.motCle , this.currentpage , this.size)
        .subscribe((data: any) => {
          this.pageUsers = data ;
          this.pages = new Array(data.totalPages);
        } , err => {
          console.log(err) ;
        }) ;
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  chercher() {
    this.doSearch() ;
  }

  doSearch() {
    this.authService.getUserss(this.motCle, this.currentpage, this.size)
      .subscribe((data: any) => {
        this.pageUsers = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }

    gotoPage(i: number) {
      this.currentpage = i ;
      this.doSearch() ;
    }

  onEditUser (id: number) {
    this.router.navigate(['editUser', id]);
  }

  deleteuser (u: AppUser) {
    const confirm = window.confirm('Are you sure you want to delete this User?') ;
    if (confirm === true) {
      this.authService.supprUser(u.id).subscribe(data => {
        this.pageUsers.content.splice(
          this.pageUsers.content.indexOf(u), 1) ;
      } , err => {
        console.log(err) ;
      }) ;
    }
  }

}

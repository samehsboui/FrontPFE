import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  pagePans: any ;
  motCle  = '';
  currentpage = 0 ;
  size = 9;
  pages: Array<number> ;
  pans;
  constructor(public authService: AuthenticationService , public router: Router) { }

  ngOnInit() {

    this.authService.getPanss(this.motCle, this.currentpage, this.size)
      .subscribe((data: any) => {
          this.pagePans = data;
          this.pages = new Array(data.totalPages);
        },err=>{
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
      )
  }



  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  chercher() {
    this.doSearch() ;
  }

  doSearch() {
    this.authService.getPanss(this.motCle, this.currentpage, this.size)
      .subscribe((data: any) => {
        this.pagePans = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }
}

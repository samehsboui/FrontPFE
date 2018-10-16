import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {



  pagePans: any ;
  motCle  = '';
  currentpage = 0 ;
  size = 6;
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

  gotoPage(i: number) {
    this.currentpage = i ;
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


  detailsPan (id: number) {
    this.router.navigate(['reservPan', id]);
  }

}

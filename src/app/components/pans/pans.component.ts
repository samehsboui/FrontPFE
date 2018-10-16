import { Component, OnInit } from '@angular/core';
import {Pan} from "../../model/model.pan";

import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-pans',
  templateUrl: './pans.component.html',
  styleUrls: ['./pans.component.css']
})
export class PansComponent implements OnInit {
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




  gotoPage(i: number) {
    this.currentpage = i ;
    this.doSearch() ;
  }

  chercher() {
    this.doSearch() ;
  }

  onEditPan (id: number) {
    this.router.navigate(['editPan', id]);
  }

  detailPan (id: number) {
    this.router.navigate(['detailPan', id]);
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


  deletePan (p: Pan) {
    const confirm = window.confirm('Are you sure you want to delete this Pan?') ;
    if (confirm === true) {
      this.authService.supprPan(p.id).subscribe(data => {
        this.pagePans.content.splice(
          this.pagePans.content.indexOf(p), 1) ;
      } , err => {
        console.log(err) ;
      }) ;
    }
  }
}

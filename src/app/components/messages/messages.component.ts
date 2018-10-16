import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Message} from "../../model/model.message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  users;
  pageMessages: any ;
  motCle  = '';
  currentpage = 0 ;
  size = 6;
  pages: Array<number> ;

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authService.getMessagess(this.motCle , this.currentpage , this.size)
    .subscribe((data: any) => {
      this.pageMessages = data ;
      this.pages = new Array(data.totalPages);
    } , err => {
      console.log(err) ;
    }) ;
  }

  onMessageCheck (id: number) {
    this.router.navigate(['messageDetails', id]);
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


  gotoPage(i: number) {
    this.currentpage = i ;
    this.doSearch() ;
  }

  deletemessage (m: Message) {
    const confirm = window.confirm('Are you sure you want to delete this Message?') ;
    if (confirm === true) {
      this.authService.supprMess(m.id).subscribe(data => {
        this.pageMessages.content.splice(
          this.pageMessages.content.indexOf(m), 1) ;
      } , err => {
        console.log(err) ;
      }) ;
    }
  }

  chercher() {
    this.doSearch() ;
  }

  doSearch() {
    this.authService.getMessagess(this.motCle , this.currentpage , this.size)
      .subscribe((data: any) => {
        this.pageMessages = data ;
        this.pages = new Array(data.totalPages);
      } , err => {
        console.log(err) ;
      }) ;
  }



}

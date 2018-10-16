import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {
  idMess: number ;
  mode = 1 ;
 mess: any = {} ;
  constructor(public activatedRoute: ActivatedRoute , public messservice: AuthenticationService , public router: Router) {
    this.idMess = activatedRoute.snapshot.params['id'] ;

  }

  ngOnInit() { this.messservice.getMess(this.idMess)
.subscribe(data => {
  this.mess = data ;
} , err => {
  console.log(err) ;
}) ;
}

  updateMess () {
    this.messservice.updateMess(this.mess)
      .subscribe(data => {
        console.log(data) ;
        alert('This Message is Marked as unread !') ;
        this.router.navigate(['message']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }


  Logout(){
    this.messservice.logout();
    this.router.navigateByUrl('/login');
  }

}

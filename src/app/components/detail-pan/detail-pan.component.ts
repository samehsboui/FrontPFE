import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-detail-pan',
  templateUrl: './detail-pan.component.html',
  styleUrls: ['./detail-pan.component.css']
})
export class DetailPanComponent implements OnInit {
  mode = 1 ;
  pan: any = {} ;
  idPan: number ;


  constructor(public activatedRoute: ActivatedRoute , public panservice: AuthenticationService , public router: Router) {
    this.idPan = activatedRoute.snapshot.params['id'] ;
  }

  ngOnInit() {
    this.panservice.getPan(this.idPan)
      .subscribe(data => {
        this.pan = data ;
      } , err => {
        console.log(err) ;
      }) ;
  }

  Logout(){
    this.panservice.logout();
    this.router.navigateByUrl('/login');
  }

  reservPan () {
    this.panservice.updateePan(this.pan)
      .subscribe(data => {
        console.log(data) ;
        alert('Your request has been registred and you will receive confirmation after 24H !') ;
        this.router.navigate(['pans']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }

}

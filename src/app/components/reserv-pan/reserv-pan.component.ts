import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-reserv-pan',
  templateUrl: './reserv-pan.component.html',
  styleUrls: ['./reserv-pan.component.css']
})
export class ReservPanComponent implements OnInit {

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

  reserverPan () {
    this.panservice.updatPan(this.pan)
      .subscribe(data => {
        console.log(data) ;
        alert('Reservation has been confirmed !') ;
        this.router.navigate(['pans']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }

}

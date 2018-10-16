import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-edit-pan',
  templateUrl: './edit-pan.component.html',
  styleUrls: ['./edit-pan.component.css']
})
export class EditPanComponent implements OnInit {


  mode = 1 ;
  pan: any = {} ;
  idPan: number ;
  fileToUpload: File = null;

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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  updatePan () {
    this.panservice.updatePan(this.pan)
      .subscribe(data => {
        console.log(data) ;
        alert('Pan updated !') ;
        this.router.navigate(['pans']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }
  Logout(){
    this.panservice.logout();
    this.router.navigateByUrl('/login');
  }

}

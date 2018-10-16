import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  taches ;
  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.authService.getTaches().subscribe(data=>{
      this.taches = data;
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
  newTask(){
    this.router.navigateByUrl('new-task');
  }





}

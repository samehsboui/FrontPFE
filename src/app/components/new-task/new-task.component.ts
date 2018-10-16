import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private  authService:AuthenticationService) { }
  task:any;
  ngOnInit() {
  }

  onSaveTask(task){
    this.authService.saveTask(task).subscribe(resp=>{
      this.task=resp;
    },err=>{
      console.log(err);
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import {AppUser} from "../model/model.appuser";
import {Pan} from "../model/model.pan";
import {Message} from "../model/model.message";
@Injectable()
export class AuthenticationService {

  private host:string = "http://localhost:8080";
  private jwtToken = null;
 name ;
 private roles:Array<any>;
userco;

  constructor(private http:HttpClient) { }

  login(user){
    return  this.http.post(this.host+"/login",user,{observe: 'response'});

  }

  getPans() {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/pans" ,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  getUserss(motCle: string , page: number , size: number) {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get('http://localhost:8080/chercherUser?mc=' + motCle + '&size=' + size + '&page=' + page ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  getPanss(motCle: string , page: number , size: number) {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get('http://localhost:8080/chercherPan?mc=' + motCle + '&size=' + size + '&page=' + page ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }


  getMessagess(motCle: string , page: number , size: number) {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get('http://localhost:8080/chercherMessage?mc=' + motCle + '&size=' + size + '&page=' + page ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  getUser(id: number) {
    return this.http.get('http://localhost:8080/users/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  supprUser(id: number) {
    return this.http.delete('http://localhost:8080/users/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  saveToken(jwt:string){
    this.jwtToken = jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

  }
  supprPan(id: number) {
    return this.http.delete('http://localhost:8080/pans/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  supprMess(id: number) {
    return this.http.delete('http://localhost:8080/messages/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  updateUser(appuser: AppUser) {
    return this.http.put('http://localhost:8080/users/' + appuser.id , appuser,{headers: new HttpHeaders({'Authorization':this.jwtToken})});
  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }

  getTaches(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/taches",
    {headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  saveTask(task){
    return this.http.post(this.host+'/taches',task, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
  }
  saveUser(appuser){
    return this.http.post(this.host+'/users',appuser, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
  }



  saveMessage(mess){
    return this.http.post(this.host+'/messages',mess, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
  }


  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }





  isAllowed(){
    for ( let r of this.roles){
      if(r.authority=='ADMIN' ) return true;
    }
    return false;
  }
  savePan(pan: Pan) {
    return this.http.post('http://localhost:8080/pans' , pan, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getPan(id: number) {
    return this.http.get('http://localhost:8080/pans/' + id,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }


  getMess(id: number) {
    return this.http.get('http://localhost:8080/messages/' + id,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }


  updatePan(pan: Pan) {
    return this.http.put('http://localhost:8080/pans/' + pan.id , pan ,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  updateMess(mess: Message) {
    return this.http.put('http://localhost:8080/messagees/' + mess.id , mess ,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  updatedMess(mess: Message) {
    return this.http.put('http://localhost:8080/messagess/' + mess.id , mess ,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  updateePan(pan: Pan) {
    return this.http.put('http://localhost:8080/panss/' + pan.id , pan ,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }

  updatPan(pan: Pan) {
    return this.http.put('http://localhost:8080/panns/' + pan.id , pan ,{headers: new HttpHeaders({'Authorization':this.jwtToken})} );
  }

}

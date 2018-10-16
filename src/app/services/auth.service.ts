import { Injectable } from '@angular/core';
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelper) {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !!token;
    //  (will return either true or false based on the token availability)
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor() { }

  loggedIn = false;

  isLoggedIn():void{
    if(sessionStorage.getItem("currentUser")){
      this.loggedIn = true;
    } else {
      this.loggedIn = false
    }
  }

  logOut(){
    sessionStorage.clear();
    this.isLoggedIn();
  }
}

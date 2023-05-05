import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  decodedToken!: any;
  constructor() { }
  public setAutoritys(autoritys: []) {
    localStorage.setItem('autority', JSON.stringify(autoritys));
  }

  public getAutoritys(): [] {
    
  //  return JSON.parse(localStorage.getItem('autority'));
    const autoritysString = localStorage.getItem('autority');
    return autoritysString ? JSON.parse(autoritysString) : [];

    
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
   // return localStorage.getItem('jwtToken');
   const token = localStorage.getItem('jwtToken');
   if (token !== null) {
     return token;
   } else {
     // handle case when 'jwtToken' is not found in localStorage
     return '';
     
   }
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getAutoritys() && this.getToken();
  }
  
  public GetMailConnecter() {
    const token =this.getToken();
    if(token != null){
    this.decodedToken = jwtDecode(token);
    console.log("The Connected");
    console.log(this.decodedToken.sub);
    return this.decodedToken.sub;
      }
    console.log(" Internaute Connected");
  }

}

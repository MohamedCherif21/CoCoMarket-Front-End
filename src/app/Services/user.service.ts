import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = 'http://localhost:8088/';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  /*public doRegistration(user:any,img:any){
    return this.httpclient
    .post("http://localhost:9090/register",user,img,{
      headers: this.requestHeader,
    });
  }*/
  public register(request: any, file: File) {
    const formData: FormData = new FormData();
    let JsonConvert=  JSON.stringify(request) ;
    formData.append('request', JsonConvert);
    formData.append('file', file);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    return this.httpclient.post<any>(this.PATH_OF_API + 'api/v1/auth/register', formData, { headers: httpHeaders });
  }
  public UpdateUser(request: any, file: File) {
    const formData: FormData = new FormData();
    let JsonConvert=  JSON.stringify(request) ;
    formData.append('request', JsonConvert);
    formData.append('file', file);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    return this.httpclient.put<any>(this.PATH_OF_API + 'api/v1/auth/update', formData, { headers: httpHeaders });
  }

  public login(loginData :any) {
    return this.httpclient.post(this.PATH_OF_API + 'api/v1/auth/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public getConnectedUser(mail :string){
    return this.httpclient.get<any>(this.PATH_OF_API +"api/v1/auth/GetbyMail/"+mail);
  }
  public DisableUnDisabe(id :number){     
    return this.httpclient.put<any>(this.PATH_OF_API +"api/v1/auth/DisableUnDisabe/"+id,{
      responseType: 'text',
    });
  }
  public getdUserById(Id :number){
    return this.httpclient.get<any>(this.PATH_OF_API +"api/v1/auth/GetthisUser/"+Id);
  }
  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + 'api/v1/demo-controller/profile', {
      responseType: 'text',
    });
  }
  public getUsers(){
    return this.httpclient.get<any[]>("http://localhost:8088/api/v1/auth/GetAllUser");
  }
  ///List user Connecter par ROLE
  public GetAllConnectedNow(){
    return this.httpclient.get<any[]>("http://localhost:8088/api/v1/auth/GetConnectedUserNow");
  }
  ///List user Connecter par ROLE
  public GetConnectedWithRole(role:string){
    return this.httpclient.get<any[]>(this.PATH_OF_API +"api/v1/auth/GetConnectedUserNowWithRole/"+role);
  }
  ///Nbr user Connecter par ROLE
  getLengthByRoleConnect(role:string) {
    return this.httpclient.get<any[]>(this.PATH_OF_API +"api/v1/auth/GetConnectedUserNowWithRole/"+role).pipe(
      map((users: any[]) => users.length)
    );
  }
  public getListUserWithRole(role:string){
    return this.httpclient.get<any[]>(this.PATH_OF_API +"api/v1/auth/GetNbrUserByRole/"+role);
  }
  getLengthByRole(role:string) {
    return this.httpclient.get<any[]>(this.PATH_OF_API +"api/v1/auth/GetNbrUserByRole/"+role).pipe(
      map((users: any[]) => users.length)
    );
  }
  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + 'api/v1/demo-controller/Dashboard', {
      responseType: 'text',
    });
  }
 public SendCodeMail(mail :string){
  return this.httpclient.get<any>(this.PATH_OF_API +"api/v1/auth/SendMailForgetPswd/"+mail);
  }
public VerifCodeMail(code :string):Observable<boolean>{ 
  return this.httpclient.get<boolean>(this.PATH_OF_API +"api/v1/auth/VerifierCode/"+code);
}
public UpdatePassword(mail :string,code :string,NewPsw :string){
  return this.httpclient.get<any>(this.PATH_OF_API +"api/v1/auth/Verifier/"+mail+"/"+code+"/"+NewPsw);
}
  public autorityMatch(allowedRoles:any):any {
    let isMatch = false;
    const userAuthoritys: any = this.userAuthService.getAutoritys();
   
    if (userAuthoritys != null && userAuthoritys) {//&& userAuthoritys ->at least content value
      for (let i = 0; i < userAuthoritys.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userAuthoritys[i].name === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
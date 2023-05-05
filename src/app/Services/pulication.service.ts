import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../Models/publication';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class PulicationService {
  constructor(private http:HttpClient, private router:Router) { }
  
  public getPub(){
    return this.http.get<any[]>("http://localhost:8088/question/all");
  }
 

  ajouterPublication(userId: number, publication: Publication){
   // const url = `${this.apiUrl}/${userId}/publications`;
    return this.http.post<Publication>(" http://localhost:8088/question/publications/"+userId,publication)
  }

  public getbyid(id:number){
    return this.http.get<any>(" http://localhost:8088/question/"+id);
}

public Deletepub(id:number){
  return this.http.delete("http://localhost:8088/question/"+id);
}




}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livraison} from "./Models/Livraison";

@Injectable({
  providedIn: 'root'
})
export class DeleveryserviceService {

  constructor(private http:HttpClient) { }
public getLivs():Observable<Livraison[]>{
return this.http.get<Livraison[]>("http://localhost:8088/Livraison/retrieve-all-Liv")
}
public DeleteLiv(id:number){
    return this.http.delete("http://localhost:8088/Livraison/remove-livraison/"+id);
}
public getbyid(id:number):Observable<Livraison>{
    return this.http.get<Livraison>("http://localhost:8088/Livraison/retrieve-Liv/"+id);
}
public addLiv(region:string,Livraison:Livraison){
    return this.http.put("http://localhost:8088/commande/add-assign-liv/"+region,Livraison)

}
public updateliv(liv:Livraison){
    return this.http.put<Livraison>("http://localhost:8088/Livraison/update-Livraison",liv)
}
public validate(id:number){

    // @ts-ignore
  return this.http.put("http://localhost:8088/Vehicule/validate-liv-car/"+id)
}
public listforuser(id:number):Observable<Livraison[]>{
    return this.http.get<Livraison[]>("http://localhost:8088/Vehicule/getliv-byid/"+id)
}

}

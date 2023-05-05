import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicule} from "../Models/vehicule";

@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

  constructor(private http:HttpClient) { }
  public getVehicule():Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>("http://localhost:8088/Vehicule/retrieve-all-Cars");
  }
  public deletevecule(id:number){
    return this.http.delete("http://localhost:8088/Vehicule/remove-Car/"+id);
  }

  public addCar(vehicule:Vehicule){
return this.http.post<Vehicule>("http://localhost:8088/Vehicule/add-Car",vehicule);
  }
  public UpdateCar(car:Vehicule){
    return this.http.put<Vehicule>("http://localhost:8088/Vehicule/update-Car",car);
  }
  public GetcarByID(id:number):Observable<Vehicule>{
    return this.http.get<Vehicule>(" http://localhost:8088/Vehicule/retrieve-Liv/"+id);
  }
public assaigncartouser(id:number,car:Vehicule){
    return this.http.put<Vehicule>("http://localhost:8088/affecter-Car-user-create/"+id,car);
  }
  public assaigncartoliv(region:string){
    // @ts-ignore
    return this.http.put("http://localhost:8088/Vehicule/assign-liv-car/"+region);
  }
}

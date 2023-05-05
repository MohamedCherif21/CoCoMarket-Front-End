import {Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {Vehicule} from "../Models/vehicule";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicule-component',
  templateUrl: './vehicule-component.component.html',
  styleUrls: ['./vehicule-component.component.css']
})
export class VehiculeComponentComponent implements OnInit{
  listCar! :Vehicule[];
  constructor(private service:VehiculeServiceService,private router: Router) { }

  ngOnInit(){

    this.service.getVehicule().subscribe(listcar=>this.listCar=listcar);
  }
deleteCar(id:number){
    this.service.deletevecule(id).subscribe(()=>this.service.getVehicule().subscribe(res=>this.listCar=res));
}
  updatecarr(id: number){
    this.router.navigate(['/admin/updatecar', id]);
  }

}

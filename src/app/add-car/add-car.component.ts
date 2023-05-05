import {Component, OnInit} from '@angular/core';
import {Vehicule} from "../Models/vehicule";
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{
  car: Vehicule=new Vehicule();
  constructor(private service:VehiculeServiceService, private router:Router) {
  }
  public AddVehicule(){
    this.service.addCar(this.car).subscribe(()=>this.router.navigateByUrl("/admin/Listvecule"))

  }
  ngOnInit(): void {


  }


}

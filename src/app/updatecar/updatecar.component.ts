import {Component, OnInit} from '@angular/core';
import {Vehicule} from "../Models/vehicule";
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit{
  car: Vehicule=new Vehicule();
  data:any;
  constructor(private service:VehiculeServiceService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.service.GetcarByID(id).subscribe(data => this.car = data)
  }

  public updateCar(){
    this.service.UpdateCar(this.car).subscribe(()=>this.router.navigateByUrl("/admin/Listvecule"))
  }
}

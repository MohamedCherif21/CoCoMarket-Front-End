import {Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assaigncartouser',
  templateUrl: './assaigncartouser.component.html',
  styleUrls: ['./assaigncartouser.component.css']
})
export class AssaigncartouserComponent implements OnInit{
  constructor(private service:VehiculeServiceService,private router: Router) { }
  region!:string;
  public assaigncartouser(){
this.service.assaigncartoliv(this.region).subscribe(
  response => {
    console.log("done");
    this.router.navigate(["/admin/home"]);
  }
)
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeleveryserviceService} from "../Services/deleveryservice.service";
import {Livraison} from "../Models/Livraison";

@Component({
  selector: 'app-up-liv',
  templateUrl: './up-liv.component.html',
  styleUrls: ['./up-liv.component.css']
})
export class UpLivComponent implements OnInit{
  car:Livraison=new Livraison();
  constructor(private route:ActivatedRoute,private service : DeleveryserviceService,private router:Router) {
  }
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.service.getbyid(id).subscribe(data => this.car = data)
  }
  public updateLiv(){
    this.service.updateliv(this.car).subscribe(()=>this.router.navigateByUrl("/admin/livraison"))
  }

}

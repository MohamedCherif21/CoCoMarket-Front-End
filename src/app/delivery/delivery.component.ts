import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DeleveryserviceService} from "../Services/deleveryservice.service";
import {Livraison} from "../Models/Livraison";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit{
  ListLiv!:Livraison[]
  constructor(private service:DeleveryserviceService,private router: Router) { }
  ngOnInit(): void {

    this.service.getLivs().subscribe(ListLiv=>this.ListLiv=ListLiv);
  }
deleteLiv(id:number){
    this.service.DeleteLiv(id).subscribe(()=>this.service.getLivs().subscribe(res=>this.ListLiv=res));

}
updateliv(id:number){
  this.router.navigate(['/admin/updateLiv', id]);
}

}

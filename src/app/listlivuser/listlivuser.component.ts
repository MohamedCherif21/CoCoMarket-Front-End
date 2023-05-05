import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {DeleveryserviceService} from "../Services/deleveryservice.service";
import {Router} from "@angular/router";
import {Livraison} from "../Models/Livraison";
import { UserAuthService } from '../Services/user-auth.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-listlivuser',
  templateUrl: './listlivuser.component.html',
  styleUrls: ['./listlivuser.component.css']
})
export class ListlivuserComponent implements OnInit{
  constructor(public service: VehiculeServiceService,private service2:DeleveryserviceService,private router:Router,private userService:UserService,
    private userAuthService:UserAuthService,
    private cdr: ChangeDetectorRef) {
  }
  listliv!: Livraison[];
  connectedUserId!: any;
  USER!:any;

  ngOnInit():void {

    const email = this.userAuthService.GetMailConnecter();

    // récupérer l'utilisateur à partir de la base de données en utilisant l'email
    this.userService.getConnectedUser(email).subscribe((user) => {
      console.log(user);
      this.USER=user;
      // stocker l'id de l'utilisateur connecté
      this.connectedUserId = user.id;
      this.REfrech();
    });
  }

    REfrech(): void {

    this.service2.listforuser(this.USER.id).subscribe(ListLiv=>this.listliv =ListLiv);
  }

  validate(id:number){
    this.service2.validate(this.USER.id).subscribe(()=>this.service2.listforuser(this.USER.id).subscribe(res=>this.listliv=res));

  }

}

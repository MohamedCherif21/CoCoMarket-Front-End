import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../Services/vehicule-service.service";
import {Router} from "@angular/router";
import {Vehicule} from "../Models/vehicule";
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})


export class CreatecarComponent implements OnInit{

  connectedUserId!: any;
  USER!:any;

  constructor(private service:VehiculeServiceService,private router: Router,private userService:UserService,
    private userAuthService:UserAuthService,
    private cdr: ChangeDetectorRef) { }
  car:Vehicule= new Vehicule();
  
  ngOnInit():void {

    const email = this.userAuthService.GetMailConnecter();

    // récupérer l'utilisateur à partir de la base de données en utilisant l'email
    this.userService.getConnectedUser(email).subscribe((user) => {
      console.log(user);
      this.USER=user;
      // stocker l'id de l'utilisateur connecté
      this.connectedUserId = user.id;
      
    });
  }
addcar(id:number){
    this.service.assaigncartouser(id,this.car).subscribe(()=>this.router.navigateByUrl("/user/home"))
}
}

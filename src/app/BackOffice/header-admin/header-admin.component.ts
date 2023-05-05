
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/Models/commande';
import { CherifService } from 'src/app/Services/cherif.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})

export class HeaderAdminComponent implements OnInit {

  UserConnecter!:string;
  user!:any;
  commandes: any[] = [];
  parametre!: string;
  connectedUserId!: any;
  USER!:any;
  constructor( private userService:UserService,
    private userAuthService:UserAuthService,private messervices :CherifService,private ActR:ActivatedRoute){}

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
      REfrech(){
        //get email from JWT
        this.UserConnecter= this.userAuthService.GetMailConnecter();
        //Get User By Mail from Data base
        this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
          this.user=data;
          console.log("**************");
          console.log(data);
        });
  }
    
  public logout() {
    this.userAuthService.clear();
   // this.router.navigate(['/home']);
  }

  chercher(parametre: string): void {
    this.messervices.rechercher(parametre)
      .subscribe((response: Commande[]) => {
        console.log(response);
        this.commandes = response;},
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
      location.reload();
    }


}

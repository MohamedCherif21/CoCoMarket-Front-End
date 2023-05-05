
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CherifService } from 'src/app/Services/cherif.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Cart } from 'src/app/Models/cart';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})

export class HeaderUserComponent implements OnInit {
        
  numProducts!: number;

  cart !:Cart ;
  connectedUserId!:number;
  USER!:any;
  constructor(private router: Router,private userAuthService:UserAuthService,
    private R:Router,private messervices :CherifService,public userService:UserService,
   ){}
 


    ngOnInit():void {

      const email = this.userAuthService.GetMailConnecter();
  
      // récupérer l'utilisateur à partir de la base de données en utilisant l'email
      this.userService.getConnectedUser(email).subscribe((user) => {
        console.log(user.num_phone);
        this.USER=user;
        // stocker l'id de l'utilisateur connecté
        this.connectedUserId = user.id;
        this.REfrech();
      });
  
    }
    
    REfrech(){
     // ID du panier dont on veut connaître le nombre de produits
    this.messervices.getNumProducts(this.connectedUserId).subscribe(
      numProducts => this.numProducts = numProducts,
      error => console.log(error)
    );
   
  }
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }     
  public logout() {
    this.userAuthService.clear();
   // this.router.navigate(['/home']);
  }

  showdetails(){
    this.R.navigate(['/panier']);
  }

  commencerachat(){
    this.R.navigate(['/user/catalogues']);
  }

  contacter(){
    this.R.navigate(['/user/contacter']);
  }

      
}

import { Component, OnInit } from '@angular/core';
import { Commande } from '../Models/commande';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { CherifService } from '../Services/cherif.service';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})


export class CommandeComponent implements OnInit {

  commande: Commande = new Commande();
  listCommandes:Commande[] = [] ; 
  commandes: any[] = [];

  idCart:number =1 ;
  
  Products : Product []=[];
  productnames : any ;

  pdfUrl!: string;

  coupon:string='';

  connectedUserId!: any;
  USER!:any;
  

  
constructor(private messervices :CherifService,private R: Router,private http :HttpClient,private userService:UserService,private userAuthService:UserAuthService) {}

ngOnInit() {

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
  this.messervices.getAllCommande(this.USER.id).subscribe(
    (response: Commande[]) => {
      console.log(response);
      this.listCommandes = response;

    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
}

deleteCommande(id: number) {
  this.messervices.deleteCommande(id).subscribe(
    () => {
      console.log(`Commande ${id} supprimée avec succès`);
      // Retirer la commande supprimée de la liste des commandes
      this.listCommandes = this.listCommandes.filter(c => c.id !== id);
      location.reload();
    },
    (error: HttpErrorResponse) => {
     alert("La commande ne peut plus être annulée");
    }
  )
  
}

getCommandebyid(idCart:number ,idcommande: number) {
  this.messervices.getCommandeById(this.USER.id,idcommande)
    .subscribe(
      (response: Commande) => {
        console.log(response);
        // Affecter la commande récupérée à une variable
        const commande = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
}

showdetails(id:Number){
  this.R.navigate(['/user/detailcommande',id]);
}

getCommandebyidd(idcommande: number) {
  this.messervices.getCommandeByIdd(idcommande)
    .subscribe(
      (response: Commande) => {
        console.log(response);
        // Affecter la commande récupérée à une variable
        const commande = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
}
onSubmit(commandes: Commande,idcart: number) {   
  this.messervices.confirmCommande(commandes, this.USER.id,this.coupon)
    .subscribe(
      (response: Commande) => {
        // Ajouter la commande créée à la liste des commandes
        this.listCommandes.push(response);

        // Calculer la date limite d'annulation
        const dateLimiteAnnulation = new Date(commandes.dateCmd);
        dateLimiteAnnulation.setHours(dateLimiteAnnulation.getHours() + 5);

        // Afficher l'alerte
        alert("Vous pouvez annuler cette commande avant le " + dateLimiteAnnulation.toLocaleString());

      },
      (error: HttpErrorResponse) => {
        console.log("fama mochkla");
      }
    );
}




  devise!: string;
  token: string = "tok_visa" ;

  parametre!: string;


  effectuerPaiement(commandeId: number, devise: string, token: string) {
    // Call the server-side API using the HttpClient
    this.http.post<any>(`http://localhost:8088/stripe)/paiement?commandeId=${commandeId}&devise=${devise}&token=${token}`, {}).subscribe(result => {
      // Handle the result here
      console.log(result);
      
      
    }, error => {
      // Handle the error here
      console.error(error);
      this.telechargerFacture(commandeId);
      alert("paiement effectué avec succés vous pouvez télécharger votre facture ");
    });
  }
telechargerFacture(commandId: number) {
    this.http.get('http://localhost:8088/Commande/facture/' + commandId, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  
}


  getProductsNames(cartId: number){
    this.messervices.getProductsNames(this.USER.id).subscribe( (response: any) => {
      this.productnames=response ;}

    )
  }

  chercher(parametre: string): void {
    this.messervices.rechercher(parametre)
      .subscribe((response: Commande[]) => {
        console.log(response);
        this.listCommandes = response;},
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
    }
}




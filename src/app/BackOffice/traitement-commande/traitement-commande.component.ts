import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Commande } from 'src/app/Models/commande';
import { CherifService } from 'src/app/Services/cherif.service';


@Component({
  selector: 'app-traitement-commande',
  templateUrl: './traitement-commande.component.html',
  styleUrls: ['./traitement-commande.component.css']
})
export class TraitementCommandeComponent implements OnInit {

  constructor(private messervices :CherifService,private R: Router,private http :HttpClient) {}

  commande: Commande = new Commande();
  listCommandes:Commande[] = [] ; 
  commandes!: Commande;

  url="http://localhost:8088/Commande";

  ngOnInit() {
  
    this.messervices.getCommandeAdmin().subscribe(
      (response: Commande[]) => {
        console.log(response);
        this.listCommandes = response;
  
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  showdetailscommande(id:Number){
    this.R.navigate(['/admin/admindetailcommande',id]);
  }

  accepterCommande(commandeId:number) {
    
    const url = `${this.url}/${commandeId}/accepter`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été acceptée avec succès.');
    });
    location.reload();
  }

  refuserCommande(commandeId:number) {
    const url = `${this.url}/${commandeId}/refuser`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été refusée avec succès.');
    });
    location.reload();
  }

  chercher(parametre: string): void {
    this.messervices.rechercher(parametre)
      .subscribe(commandes => this.listCommandes = commandes);
  }


}

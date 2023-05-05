import { Component, OnInit } from '@angular/core';
import { Commande, Etat } from '../Models/commande';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CherifService } from '../Services/cherif.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit{
  

  constructor(private messervices :CherifService, private ActR:ActivatedRoute,private http :HttpClient) {}

  idcommande!: number ;
  commande!: Commande;
  u!:Product ;
  idCart:number =1 ;
  token: string = "tok_visa" ;


  remise:number=0.8 ;

  url="http://localhost:8088/Commande";

    ngOnInit(): void {
      this.idcommande=this.ActR.snapshot.params['id'];
      this.messervices.getCommandeById(this.idCart,this.idcommande).subscribe(data => this.commande=data);
    }

    telechargerFacture(commandId: number) {
      this.http.get('http://localhost:8088/Commande/facture/' + commandId, { responseType: 'blob' }).subscribe((blob: Blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });
    
  }

  accepterCommande() {
    const commandeId = 1; // ID de la commande à accepter
    const url = `${this.url}/${commandeId}/accepter`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été acceptée avec succès.');
    });
  }

  refuserCommande() {
    const commandeId = 2; // ID de la commande à refuser
    const url = `${this.url}/${commandeId}/refuser`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été refusée avec succès.');
    });
  }

  effectuerPaiement(commandeId: number, devise: string, token: string) {
    if(this.commande.etat===Etat.VALIDe){
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
  else {alert("you can't buy this order it's not validated yet !")}
}

}

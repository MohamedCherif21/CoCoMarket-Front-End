import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/Models/commande';
import { CherifService } from 'src/app/Services/cherif.service';

@Component({
  selector: 'app-admindetail-commande',
  templateUrl: './admindetail-commande.component.html',
  styleUrls: ['./admindetail-commande.component.css']
})
export class AdmindetailCommandeComponent implements OnInit{

  constructor(private messervices :CherifService,private ActR:ActivatedRoute,private http :HttpClient) {}

  idcommande!: number ;
  commande!: Commande;
  idCart:number =1 ;
  commandes: any[] = [];

  parametre: string = '';

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

}

import { Component, Input, OnInit } from '@angular/core';
import { Raitingproduct } from '../Models/raitingproduct';
import { RaitingService } from '../Services/raiting.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { ShopService } from '../Services/shop.service';
import { Router } from '@angular/router';
import { CherifService } from '../Services/cherif.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() p:any

selectedProduits: number[] = []; // tableau des IDs des produits sélectionnés
 public  raitingComparison: string = '';
  constructor(private raitingService: RaitingService , private messervices :CherifService,   private http: HttpClient   ,  private shopService: ShopService,    private router: Router){}
      
  ngOnInit(): void {
      }
      change(p:any){
        console.log("hello")
        console.log(p)
        let rate:Raitingproduct= new Raitingproduct()
        rate.score=p.raiting
        this.ajouterRainting(p.id,rate)
      }
        
      ajouterRainting(idProduit: number, raintingP: Raitingproduct): void {
        this.raitingService.ajouterRainting(idProduit, raintingP)
          .subscribe(() => console.log('Le raiting a été ajouté avec succès.'));
      }
    
      getImageUrl(productId: number ): string {
        return 'http://localhost:8088/produits/'+productId+"/image" 
    
      
      }
    
    
      selectProduit(id: number) {
        // Vérifier si le produit est déjà sélectionné
        const index = this.selectedProduits.indexOf(id);
        if (index > -1) {
          // Si oui, le désélectionner
          this.selectedProduits.splice(index, 1);
        } else {
          // Sinon, ajouter le produit aux produits sélectionnés
          if (this.selectedProduits.length < 2) {
            this.selectedProduits.push(id);
          } else {
            // Si deux produits sont déjà sélectionnés, remplacer le premier produit par celui-ci
            this.selectedProduits.shift();
            this.selectedProduits.push(id);
            // Appeler la fonction sumProduit avec les deux IDs
            this.sumProduit(this.selectedProduits[0], this.selectedProduits[1]);
          }
        }
      }
      
      sumProduit(idProduit1: number, idProduit2: number) {
        this.http.get(`http://localhost:8088/SumRaint?idproduit=${idProduit1}&idporduit2=${idProduit2}`)
          .subscribe((result: any) => {
            this.raitingComparison = result;
          });
        }

    addToCart(productId: number) {
    this.messervices.addProductToCart(productId, 1).subscribe(() => {
      console.log('Product added to cart.');
      location.reload();

    });

 


}
}


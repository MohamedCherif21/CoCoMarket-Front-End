import { Component } from '@angular/core';
import { ProduitService } from '../Service/produit.service';
import { Categorie } from '../Models/categorie';

@Component({
  selector: 'app-categorieofproduct',
  templateUrl: './categorieofproduct.component.html',
  styleUrls: ['./categorieofproduct.component.css']
})
export class CategorieofproductComponent {
  
  categorie: Categorie = new Categorie() ; 


 constructor( private Produitservice :ProduitService){}

 ajouterCategorie(): void {
  this.Produitservice.addCategorie(this.categorie)
    .subscribe(() => console.log('La catégorie a été ajoutée avec succès.'));
}
  }
  


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../Models/produit';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Catalogue } from 'src/app/Models/catalogue';


@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  produits: Produit[] = [];
  catalogueId = this.route.snapshot.params['id'];
  Choise!:any;
  constructor(
    private catalogueService: CatalogueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GetProduct();
    const catalogueId = this.route.snapshot.params['id'];
    this.catalogueService.getProduitsByCatalogueId(catalogueId).subscribe((produits: Produit[]) => {
      this.produits = produits;
    });

  }
  /*ngOnInit(): void {
    const catalogueId = this.route.snapshot.params['id'];
    
    // Récupérer les produits du catalogue
    this.catalogueService.getProduitsByCatalogueId(catalogueId).subscribe((produits: Produit[]) => {
      // Stocker les ids des produits dans un tableau
      const productIdsInCatalogue = produits.map((p) => p.id);
  
      // Récupérer tous les produits et filtrer ceux qui ne sont pas dans le catalogue
      this.catalogueService.getAllProduits().subscribe((produits: Produit[]) => {
        const productsNotInCatalogue = produits.filter((p) => !productIdsInCatalogue.includes(p.id));
        this.produits = productsNotInCatalogue;
      });
    });
  }*/
  

  
  GetProduct(){
    this.catalogueService.getAllProduits().subscribe((produits: Produit[]) => {
      this.Choise = produits;
    });

  }

  addProduitToCatalogue(catalogueId: number, produitId: number): void {
    const catalogueId1 = this.route.snapshot.params['id'];
    this.catalogueService.addProduitToCatalogue(catalogueId1, produitId).subscribe(() => {
      console.log(`Produit ${produitId} a été ajouté au catalogue ${catalogueId1} avec succès!`);
    }, error => {
      console.error(`Une erreur s'est produite lors de l'ajout du produit ${produitId} au catalogue ${catalogueId}:`, error);
    });
  }

  removeProductFromCatalogue(produitId: number): void {
    const catalogueId = this.route.snapshot.params['id'];
    this.catalogueService.removeProduitFromCatalogue(catalogueId, produitId).subscribe(() => {
      console.log(`Produit ${produitId} a été supprimé du catalogue ${catalogueId} avec succès!`);
      // Actualiser la liste des produits dans le catalogue
      this.catalogueService.getProduitsByCatalogueId(catalogueId).subscribe((produits: Produit[]) => {
        this.produits = produits;
      });
      alert('`Produit a été supprimé du catalogue avec succès!')
    }, error => {
      console.error(`Une erreur s'est produite lors de la suppression du produit ${produitId} du catalogue ${catalogueId}:`, error);
    });
  }





  
}
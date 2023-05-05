import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../Models/catalogue';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Produit } from '../../Models/produit';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product-to-catalogue',
  templateUrl: './add-product-to-catalogue.component.html',
  styleUrls: ['./add-product-to-catalogue.component.css']
})
export class AddProductToCatalogueComponent implements OnInit {
  produits: Produit[] = [];
  catalogueId = this.route.snapshot.params['id'];


  constructor(
    private catalogueService: CatalogueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /*ngOnInit(): void {
    this.catalogueService.getAllProduits().subscribe((produits: Produit[]) => {
      this.produits = produits;
    });

    
  }*/
  ngOnInit(): void {
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
  }



  addProduitToCatalogue(catalogueId: number, produitId: number): void {
    const catalogueId1 = this.route.snapshot.params['id'];
    this.catalogueService.addProduitToCatalogue(catalogueId1, produitId).subscribe(() => {
      this.router.navigate(['admin/produits/'+catalogueId1]);
      console.log(`Produit ${produitId} a été ajouté au catalogue ${catalogueId1} avec succès!`);
      alert('Produit a été ajouté au catalogue avec succès!');
      this.ngOnInit();
      
    }, error => {
      console.error(`Une erreur s'est produite lors de l'ajout du produit ${produitId} au catalogue ${catalogueId}:`, error);
    });
  }


}

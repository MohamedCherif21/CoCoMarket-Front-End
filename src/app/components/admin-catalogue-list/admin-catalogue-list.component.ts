import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../Models/catalogue';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Produit } from '../../Models/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-catalogue-list',
  templateUrl: './admin-catalogue-list.component.html',
  styleUrls: ['./admin-catalogue-list.component.css']
})
export class AdminCatalogueListComponent implements OnInit {

  catalogues: Catalogue[] = [];
  produits: Produit[] = [];
  produit!: Produit;

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getAllCatalogues().subscribe((catalogues: Catalogue[]) => {
      this.catalogues = catalogues;
    });
  }

  voirProduits(catalogueId: number): void {
    this.router.navigate(['admin/catalogues/'+catalogueId+'/produits']);
  }

  remplirCatalogue(catalogueId: number): void {
    this.router.navigate(['admin/produits/'+catalogueId])
  }
  
  

  createTop50Catalogue() {
    this.catalogueService.createTop50Catalogue().subscribe((catalogue: Catalogue) => {
      console.log("Le nouveau catalogue Top 50 a été créé avec succès!");
      // Rediriger l'utilisateur vers la page du nouveau catalogue créé
      this.router.navigate(['admin/catalogues/'+catalogue.id+ '/produits']);
        }, error => {
      console.error("Une erreur s'est produite lors de la création du catalogue Top 50:", error);
    });
  }

  async createTopRatedProducts() {
    this.catalogueService.createTopRatedProductsCatalogue().subscribe((catalogue: Catalogue) => {
      console.log("Le nouveau catalogue Top 50 a été créé avec succès!");
      // Rediriger l'utilisateur vers la page du nouveau catalogue créé
      this.router.navigate(['admin/catalogues/'+catalogue.id+ '/produits']);
        }, error => {
      console.error("Une erreur s'est produite lors de la création du catalogue Top 50:", error);
    });
  
  }

  createLatestCatalogue() {
    this.catalogueService.createLatestProductsCatalogue().subscribe((catalogue: Catalogue) => {
      console.log("Le nouveau catalogue LATEST a été créé avec succès!");
      // Rediriger l'utilisateur vers la page du nouveau catalogue créé
      this.router.navigate(['admin/catalogues/'+catalogue.id+ '/produits']);
        }, error => {
      console.error("Une erreur s'est produite lors de la création du catalogue Top 50:", error);
    });
  }

  createPromoCatalogue() {
    this.catalogueService.createPromoProductsCatalogue().subscribe((catalogue: Catalogue) => {
      console.log("Le nouveau catalogue LATEST a été créé avec succès!");
      // Rediriger l'utilisateur vers la page du nouveau catalogue créé
      this.router.navigate(['admin/catalogues/'+catalogue.id+ '/produits']);
        }, error => {
      console.error("Une erreur s'est produite lors de la création du catalogue Top 50:", error);
    });
  }

  addProduitToCatalogue(catalogueId: number, produitId: number): void {
    this.catalogueService.addProduitToCatalogue(catalogueId, produitId).subscribe(() => {
      console.log(`Produit ${produitId} a été ajouté au catalogue ${catalogueId} avec succès!`);
    }, error => {
      console.error(`Une erreur s'est produite lors de l'ajout du produit ${produitId} au catalogue ${catalogueId}:`, error);
    });
  }

  removeProductFromCatalogue(produitId: number): void {
  
    this.catalogueService.removeCatalogue(produitId).subscribe(() => {
      console.log(`Catalogue ${produitId} a été supprimé avec succès!`);
      // Actualiser la liste des produits dans le catalogue
      alert('`Catalogue a été supprimé avec succès!')
      this.ngOnInit();
    }, error => {
      console.error(`Une erreur s'est produite lors de la suppression du catalogue ${produitId}`, error);
    });
  }

  getCatalogueImg(nomCatalogue: string): string {
    if (nomCatalogue === 'Dernières nouveautés') {
      return 'https://thumbs.dreamstime.com/b/nouvelle-affiche-de-papier-avec-les-courses-color%C3%A9es-brosse-125472886.jpg';
    } else if (nomCatalogue === 'PromotionCatalogue') {
      return 'https://st.depositphotos.com/2274151/2765/i/600/depositphotos_27659707-stock-photo-promotion-stamp.jpg';
    } else if (nomCatalogue === 'Top Rated Products') {
      return 'https://t4.ftcdn.net/jpg/02/95/30/87/360_F_295308726_KNiKnBlojBBc8Qdph86wGGsbot67nr4x.jpg';
    }else if (nomCatalogue === 'Top 50 Produits') {
      return 'https://img.freepik.com/premium-vector/best-seller-golden-label-sign_118124-4690.jpg?w=360';
    } else {
      return 'default_image_url';
    }
  }
  
  

  


}

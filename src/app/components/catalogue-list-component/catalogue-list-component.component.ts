import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../Models/catalogue';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list-component.component.html',
  styleUrls: ['./catalogue-list-component.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogues: Catalogue[] = [];

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getAllCatalogues().subscribe((catalogues: Catalogue[]) => {
      this.catalogues = catalogues;
    });
  }

  voirProduits(catalogueId: number): void {
    this.router.navigate(['user/catalogues/'+catalogueId+ '/produits']);
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

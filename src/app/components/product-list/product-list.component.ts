import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../Models/produit';
import { CatalogueService } from '../../services/catalogue-service.service';
import { CherifService } from 'src/app/Services/cherif.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produits: Produit[] = [];

  constructor(
    private catalogueService: CatalogueService,
    private route: ActivatedRoute,
    private messervices : CherifService
  ) { }

  ngOnInit(): void {
    const catalogueId = this.route.snapshot.params['id'];
    this.catalogueService.getProduitsByCatalogueId(catalogueId).subscribe((produits: Produit[]) => {
      this.produits = produits;
    });
  }

  addToCart(productId: number) {
    this.messervices.addProductToCart(productId, 1).subscribe(() => {
      console.log('Product added to cart.');
      location.reload();

    });

 


}
  
}

import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Models/produit';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-allproductlist',
  templateUrl: './admin-allproductlist.component.html',
  styleUrls: ['./admin-allproductlist.component.css']
})
export class AdminAllproductlistComponent implements OnInit {
  produits: Produit[] = [];


  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getAllProduits().subscribe((produits: Produit[]) => {
      this.produits = produits;
    });
  }


}

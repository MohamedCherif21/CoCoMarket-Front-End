import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Service/shop.service';
import { Shop } from '../Models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shop:Shop = new Shop();
  constructor(private shopService:ShopService,private router: Router){}
  addShop() {
    // Enregistrement du shop dans la base de données
    this.shopService.addShop(this.shop).subscribe(response => {
      console.log(response);
      // Récupération de l'ID du shop depuis la réponse
      const shopId = response.id;
      // Génération du QR code pour ce shop
      this.shopService.generateQRCode(shopId).subscribe(qrCode => {
        // Enregistrement du QR code dans le champ qrCodeShop de l'entité Shop
        this.shop.qrCodeShop = qrCode;
        // Redirection vers la page qui affiche tous les shops
        this.router.navigate(['user/allshop']);
      }, error => {
        console.error(error);
      });
    }, error => {
      console.error(error);
    });
  }
  
  
  ngOnInit(): void {
  //  this.shop.nom="" ; 
  console.log(Shop)   

  }

  
}

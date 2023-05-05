import { Component, OnInit } from '@angular/core';
import { Shop } from '../Models/shop';
import { ShopService } from '../Service/shop.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allshop',
  templateUrl: './allshop.component.html',
  styleUrls: ['./allshop.component.css'],
})
export class AllshopComponent implements OnInit {
  shops: Shop[] = [];
  shop : any; 
  showChildren = false;

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shopService.getShop().subscribe((data) => {
      console.log('data : ', data);
      this.shop = data;
    });
  }

  toggleChildren() {
    this.showChildren = !this.showChildren;
  }

  onItemClick(item: any) {
    this.router.navigate(['/details', item.id]);
  }
}

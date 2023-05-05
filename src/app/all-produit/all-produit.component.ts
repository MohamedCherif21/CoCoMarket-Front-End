import { Component, OnInit} from '@angular/core';
import { Produit } from '../Models/produit';
import { ProduitService } from '../Service/produit.service';

@Component({
  selector: 'app-all-produit',
  templateUrl: './all-produit.component.html',
  styleUrls: ['./all-produit.component.css']
})
export class AllProduitComponent implements OnInit{
  produits:Produit[]=[];
  constructor(private service:ProduitService) { }
  ngOnInit(): void {
    this.service.getProduit().subscribe((data:Produit[])=>{
      console.log(data)
      this.produits=data

  });
}

getImageUrl(productId: number ): string {
  return 'http://localhost:8088/produits/'+productId+"/image" 


}
 
}
 
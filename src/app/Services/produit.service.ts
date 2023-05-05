import { Injectable } from '@angular/core';
import { Produit } from '../Models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) {  }

  public getProduit(){
    return this.http.get<Produit[]>("POST http://localhost:8088/ajouterProduit/{{idShop}}/{{idCateg}}"); 
  }
}

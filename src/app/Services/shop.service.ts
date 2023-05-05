import { Injectable } from '@angular/core';
import { Shop } from '../Models/shop';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private baseUrl = 'http://localhost:8088'
  constructor(private http: HttpClient) {}
  public getShop() {
    return this.http.get<Shop[]>('http://localhost:8088/shop');
  }
  public addShop(shop: Shop) {
    return this.http.post<Shop>('http://localhost:8088/add-shop', shop);
  }

  public getSingleShop(id: number) {
    return this.http.get<any>('http://localhost:8088/shop/' + id);
  }

  ajouterProduitAuShopEtCategorie(produit: any, idShop: number, idCateg: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouterProduit/${idShop}/${idCateg}`, produit);
  }

  public getProductImage(id: number): Observable<any> {
    return this.http.get(`http://localhost:8088/produits/${id}/image`, {responseType: 'blob'});
  }

 
}

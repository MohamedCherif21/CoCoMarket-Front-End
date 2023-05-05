import { Injectable } from '@angular/core';
import { Produit } from '../Models/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../Models/categorie';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8088/add-Categorie';

  constructor(private http:HttpClient) {  }

  public getProduit(){
    return this.http.get<Produit[]>("http://localhost:8088/allproduct"); 
  }

  getImageForProduct(id: number): Observable<any> {
    const url = `/produits/${id}/image`;
    return this.http.get(url, { responseType: 'arraybuffer' });
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseUrl}`, categorie);
  }

}

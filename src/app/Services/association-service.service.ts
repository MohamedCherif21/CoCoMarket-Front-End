import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../Models/produit';
import { Koffa } from '../Models/koffa';

@Injectable({
  providedIn: 'root'
})
export class AssociationServiceService {

  private baseUrl = 'http://localhost:8088/api/catalogue';
  private baseUrl1 = 'http://localhost:8088/produits';
  private baseurl2 = 'http://localhost:8088/koffas';
 

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl1);
  }

  getProduitsByKoffaId(koffaId: number): Observable<Produit[]> {
    const url = `${this.baseurl2}/${koffaId}/produits`;
    return this.http.get<Produit[]>(url);
  }

  addProduitToCatalogue(koffaId: number, produitId: number): Observable<any> {
    const url = `${this.baseurl2}/${koffaId}/add-products`;
    return this.http.post(url, null);
  }

  ajouterProduitsAuKoffa(koffaId: number, produitIds: number[]): Observable<Koffa> {
    return this.http.post<Koffa>(`http://localhost:8088/koffas/${koffaId}/add-multiple-products`, produitIds);
  }


}

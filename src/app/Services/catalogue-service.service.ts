import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogue } from '../Models/catalogue';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private baseUrl = 'http://localhost:8088/api/catalogue';
  private baseUrl1 = 'http://localhost:8088/produits';
  private baseUrl2 ='http://localhost:8088/api/catalogue';

  constructor(private http: HttpClient) { }

  getAllCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.baseUrl);
  }
  getProduitsByCatalogueId(catalogueId: number): Observable<Produit[]> {
    const url = `${this.baseUrl}/catalogue/${catalogueId}/produits`;
    return this.http.get<Produit[]>(url);
  }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl1);
  }

  createTop50Catalogue(): Observable<Catalogue> {
    const url = `${this.baseUrl}/top50catalogue`;
    return this.http.post<Catalogue>(url, {});
  }

  createTopRatedProductsCatalogue(): Observable<Catalogue> {
    const url = `${this.baseUrl2}/top-rated-products`;
    return this.http.post<Catalogue>(url, {});
  }

  createLatestProductsCatalogue(): Observable<Catalogue> {
    const url = `${this.baseUrl2}/latest-products`;
    return this.http.post<Catalogue>(url, {});
  }
  
  createPromoProductsCatalogue(): Observable<Catalogue> {
    const url = `${this.baseUrl2}/promo`;
    return this.http.post<Catalogue>(url, {});
  }

  addProduitToCatalogue(catalogueId: number, produitId: number): Observable<any> {
    const url = `${this.baseUrl}/${catalogueId}/produits/${produitId}`;
    return this.http.post(url, null);
  }

  removeProduitFromCatalogue(catalogueId: number, produitId: number): Observable<any> {
    const url = `${this.baseUrl}/${catalogueId}/produits/${produitId}`;
    return this.http.delete(url);
  }

  removeCatalogue(catalogueId: number): Observable<any> {
    const url = `${this.baseUrl}/${catalogueId}`;
    return this.http.delete(url);
  }
  

}

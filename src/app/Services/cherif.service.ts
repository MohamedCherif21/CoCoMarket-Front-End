import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commande } from '../Models/commande';
import { UserAuthService } from './user-auth.service';
import { UserService } from './user.service';

const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: 'root'
})
export class CherifService {

  product: Product[] = [];
  UserConnecter!: any;
  USER!:any;

  private nombreArticlesSubject = new Subject<number>();

  constructor(private http:HttpClient,private userService:UserService,private userAuthService:UserAuthService) { }
  //cart.service

  getuserconnecte(){
  //get email from JWT
  this.UserConnecter= this.userAuthService.GetMailConnecter();
  //Get User By Mail from Data base
  this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
    console.log("**************");
    this.USER=data;
    console.log(this.USER.id);
  });
}

  getProductsFromCart(cartId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8088/Cart/retrieve-Product_in_cart/${cartId}`);
  }

  addProductToCart(idProduit: number, idCart: number) {
    return this.http.post(`http://localhost:8088/Cart/panier/ajouter-produit/${idProduit}/${idCart}`, {});
  }

  deleteprodfromcart(idProduit: number, idCart: number){
    return this.http.delete(`http://localhost:8088/Cart/panier/supprimer-produit/${idProduit}/${idCart}`, {});
  }

  nombreArticlesDansPanier(): Observable<number> {
    return this.nombreArticlesSubject.asObservable();
  }

  getNumProducts(cartId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Cart/numProducts/${cartId}`);
  }


  gettotalprice(cartId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Cart/totalprice/${cartId}`);
  }


  getquantity(cartId: number , produitId :number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Produit_cart/${cartId}/products/${produitId}/quantity`);
    
  }

  removeProduitFromCart(cartId: number , produitId :number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8088/Produit_cart/${cartId}/${produitId}/removefromcart`);
  }
  //************************************************** */
  //commande.service

  url="http://localhost:8088/Commande";
  apiUrl='http://localhost:8088/stripe/paiement';
  baseUrl="http://localhost:8080/carts" ;

  getAllCommande(idCart: number): Observable<Commande[]> {
    const url = `${this.url}/retrieve-all-Commandes/${idCart}`;
    return this.http.get<Commande[]>(url);
  }
  
  getCommandeById(idCart: number, idCommande: number): Observable<Commande> {
    const url = `${this.url}/retrieve-Commande/${idCart}/${idCommande}`;
    return this.http.get<Commande>(url);
  }

  getCommandeByIdd( idCommande: number): Observable<Commande> {
    const url = `${this.url}/retrieve-Commande/${idCommande}`;
    return this.http.get<Commande>(url);
  }

  getCommandeAdmin(): Observable<Commande[]> {
    const url = `${this.url}/admin_retrieve-all-Commandes`;
    return this.http.get<Commande[]>(url);

  }

    ConfirmCommande(idcart: FormData): Observable<any> {
      return this.http.post<Commande>(this.url + `/Confirm-Commande`,idcart);
    }

   
     deleteCommande(id: number): Observable<any> {
      const url = `${this.url+`/remove-Commande`}/${id}`;
      return this.http.delete(url);
    }
  
    confirmCommande(commande: Commande, idCart: number, coupon: string): Observable<Commande> {
      let url = `${this.url}/Confirm-Commande/${idCart}`;
      if (coupon) {
        url += `?coupon=${encodeURIComponent(coupon)}`;
        console.log(coupon);
      }
      return this.http.post<Commande>(url, commande);
    }
    

  effectuerPaiement(commandeId: number, devise: string, token: string): Observable<any> {
    const body = { commandeId, devise, token };
    return this.http.post<any>(this.apiUrl, body);
  }

  getProductsNames(cartId: number): Observable<string[]> {
    const url = `${this.baseUrl}/${cartId}/products/names`;
    return this.http.get<string[]>(url)
     
  }

  rechercher(parametre: string): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.url}/rechercher/${parametre}`);
  }

   //Product.service 
   urll = "http://localhost:8088/produits/cherif";
  

   getAllproducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.urll);
   }
 
  
 
 
   getoneproduct(idProduit:number):Observable<Product> {
     const urlll = `${this.urll}/${idProduit}`;
     return this.http.get<Product>(urlll);
   }
  

}

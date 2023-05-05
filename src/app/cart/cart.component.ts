import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { Commande } from '../Models/commande';
import { Router } from '@angular/router';
import { Produit_Cart } from '../Models/produit-cart';
import { CherifService } from '../Services/cherif.service';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //idCart:number =1 ; // L'ID du panier 

  products: Product[] = [];
   /* new Product(1),
    new Product(2)
  ];*/
  USER!:any;

  // nombre d'instances de Produit_Cart à créer

  produitcart: Produit_Cart[] = [];

  private initialiserProduitCart(): void {
    const n = 10;

    for (let i = 0; i <= n; i++) {
      this.produitcart.push(new Produit_Cart(this.connectedUserId, i));
    }
  }




  listCommandes:Commande[] = [] ; 
  
  prodwiyet:Product= new Product();

  prod!:Product ;

  commande: Commande = new Commande(); 
  numProducts!: number;
  totalprice!:number ;

  coupon!:string;
  connectedUserId!: any;
  prodincart!:any;
 
  //quantiti?:number ;
  
  constructor(private R:Router,private messervices:CherifService,private userService:UserService,
    private userAuthService:UserAuthService,
    private cdr: ChangeDetectorRef) { this.initialiserProduitCart();}

  ngOnInit():void {

    const email = this.userAuthService.GetMailConnecter();

    // récupérer l'utilisateur à partir de la base de données en utilisant l'email
    this.userService.getConnectedUser(email).subscribe((user) => {
      console.log(user);
      this.USER=user;
      // stocker l'id de l'utilisateur connecté
      this.connectedUserId = user.id;
      this.REfrech();
    });

  }

  

  REfrech(){
    this.messervices.getProductsFromCart(this.USER.id)
    .subscribe( (response: Product[]) => {
      this.products=response ;
      console.log(response);
      
    },
    (error: HttpErrorResponse) => {  
      console.log("fama mochkol!!!!!!!!!!");
    }
    )
    
    //const cartId = 1; // ID du panier dont on veut connaître le nombre de produits
    this.messervices.getNumProducts(this.USER.id).subscribe(
      numProducts => this.numProducts = numProducts,
      error => console.log(error)
    );


    this.messervices.gettotalprice(this.USER.id).subscribe(
      totalprice => this.totalprice = totalprice,
      error => console.log(error)
    );
      this.getQuantities().then(quantities => {
        console.log(quantities); // liste de quantités de produits
      }).catch(error => {
        console.error(error);
      });

      for (const product of this.produitcart) {
      this.messervices.removeProduitFromCart(this.USER.id,product.produit).subscribe(() => {
        console.log('Produit supprimé du panier avec succès');
        
      });}

  }
  quantities: {[key: number]: number} = {};

getQuantities(): Promise<number[]> {
  return new Promise<number[]>((resolve, reject) => {
    const quantities: number[] = [];
    for (const product of this.produitcart) {
      this.messervices.getquantity(this.USER.id, product.produit)
        .subscribe(quantity => {
          product.quantity = quantity;
          this.cdr.detectChanges();
          quantities.push(quantity);
          if (quantities.length === this.produitcart.length) {
            resolve(quantities);
          }
        }, error => {
          reject(error);
        });
    }
  });
}

  paniervide():boolean{
    if(this.products !=null && this.numProducts!=0)
    return false;
    return true;
    }


    addToCart(productId: number) {
      this.messervices.addProductToCart(productId, this.USER.id).subscribe(() => {
        console.log('Product added to cart.');
        location.reload();
      });
    }

    deletfromCart(productId:number){
      this.messervices.deleteprodfromcart(productId,this.USER.id)
      .subscribe(
        () => {
          console.log(`le produit ${productId} supprimée avec succès`);
          // Retirer la commande supprimée de la liste des commandes
          this.products = this.products.filter(c => c.id !== productId);
        },
        (error: HttpErrorResponse) => {
          console.log("erreur");
        }
        
      )
     
      location.reload();
    }


  ajoutercommande(commandes: Commande,idcart: number,coupon:string) {   
    this.messervices.confirmCommande(commandes, this.USER.id,coupon)
      .subscribe(
        (response: Commande) => {
          // Ajouter la commande créée à la liste des commandes
          this.listCommandes.push(response);
          alert("You can cancel this order before the lapse of 5 hours ");

        },
        (error: HttpErrorResponse) => {
          console.log("fama mochkla");
        }
      );
}


showcommandes(){
  this.R.navigate(['/user/commande']);
}

commencerachat(){
  this.R.navigate(['/user/catalogues']);
}


  }

  


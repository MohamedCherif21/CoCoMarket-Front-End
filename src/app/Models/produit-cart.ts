
import { User } from '../model/User';
import { Cart } from './cart';
import { Product } from './product';

export class Produit_Cart {

    id!: number;
    quantity?: number ;
    cart!: Cart["id"];
    produit!: Product["id"];

    constructor(idcart : User["id"], idproduit :Product["id"] ) {
        this.cart = idcart;
        this.produit = idproduit ;
        
      }
  }
  
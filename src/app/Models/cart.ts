import { User } from '../model/User';
import { Commande } from './commande';
import { Produit_Cart } from './produit-cart';

export class Cart {

  id!: number;
  nbProd!: number;
  totalPrice!: number;
  totalWeight!: number;
  Items!: Produit_Cart[];
  commandes!: Commande[];
  iduser!:User;

}
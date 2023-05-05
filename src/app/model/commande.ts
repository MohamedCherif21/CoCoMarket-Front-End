import { Cart } from './cart';

export enum Etat {
  EN_ATTENTE = 'WAITING',
  EN_COURS_DE_Traitement = 'EDITABLE',
  VALIDe = 'VALIDATED',
  ANNULE = 'REFUSED'
}

export enum PaymentMode {
  CARTE_BANCAIRE = 'TRANSFER',
  ESPECE = 'CASH'
  
}



export class Commande {

  id!: number;
  dateCmd!: Date;
  shop_name!: string;
  shop_address!: string;
  buyer_email!: string;
  buyer_Address!: string;
  tax!: number;
  nbProd!: number;
  total_price!: number;
  currency!: string;
  total_weight!: number;
  //lesProduits!: string[];
  //archive!: boolean;
  les_produits!: string;
  etat!: Etat;
  payment_mode!: PaymentMode;
  methode!: string;
  commandeCart!: Cart;

  
}

export class Koffa {
    id!: number;
    nom_association!: string;
    description!: string;
    userKoffaID!: number;
    produits_Koffa!: Set<Produit>;
}

export class Produit {
    id!: number;
    reference!: string;
    nom!: string;
    img!: string;
    description!: string;
    prix!: number;
    etatsProduit!: boolean;
    status!: Status;
    datePublication!: Date;
    raitingProd!: RaitingProduct[];
    categorie!: Categorie;
    shop!: Shop;
    catalogues!: Catalogue[];
    quantiteVendue!: number;
    pourcentagePromotion!: number;
    isFlashSale!: boolean;
    isPromotion!: boolean;
    prixPromotion!: number;
  }

  export enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
  }

  export interface RaitingProduct {
    id: number;
    rating: number;
    commentaire: string;
  }

  export interface Categorie {
    id: number;
    nom: string;
  }

  export interface Shop {
    id: number;
    nom: string;
    adresse: string;
    img: string;
  }

  export interface Catalogue {
    id: number;
    nom: string;
    description: string;
    img: string;
    produits: Produit[];
  }

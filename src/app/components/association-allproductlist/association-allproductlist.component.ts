import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { AssociationServiceService } from 'src/app/Services/association-service.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

import { CatalogueService } from 'src/app/services/catalogue-service.service';

@Component({
  selector: 'app-association-allproductlist',
  templateUrl: './association-allproductlist.component.html',
  styleUrls: ['./association-allproductlist.component.css']
})
export class AssociationAllproductlistComponent implements OnInit {
  produits: Produit[] = [];
  koffaID = this.route.snapshot.params['id'];
  connectedUserId!: any;
  USER!:any;

  constructor(
    private associationService: AssociationServiceService,
    private route: ActivatedRoute,
    private router: Router,private userService:UserService,
    private userAuthService:UserAuthService,
    private cdr: ChangeDetectorRef
  ) { }

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

  REfrech(): void {
    const koffaID = this.USER.id
    
    // Récupérer les produits du catalogue
    this.associationService.getProduitsByKoffaId(koffaID).subscribe((produits: Produit[]) => {
      // Stocker les ids des produits dans un tableau
      const productIdsInCatalogue = produits.map((p) => p.id);
  
      // Récupérer tous les produits et filtrer ceux qui ne sont pas dans le catalogue
      this.associationService.getAllProduits().subscribe((produits: Produit[]) => {
        const productsNotInCatalogue = produits.filter((p) => !productIdsInCatalogue.includes(p.id));
        this.produits = productsNotInCatalogue;
      });
    });
  }

  addProduitToCatalogue(catalogueId: number, produitId: number[]): void {
    const KoffaId1 = this.route.snapshot.params['id'];
    this.associationService.ajouterProduitsAuKoffa(KoffaId1, produitId).subscribe(() => {
      this.router.navigate(['user/association/produits/'+KoffaId1]);
      console.log(`Produit  a été ajouté au catalogue ${KoffaId1} avec succès!`);
      alert('Produit a été ajouté au catalogue avec succès!');
      this.ngOnInit();
      
    }, error => {
      console.error(`Une erreur s'est produite lors de l'ajout du produit ${produitId} au catalogue ${catalogueId}:`, error);
    });
  }

}

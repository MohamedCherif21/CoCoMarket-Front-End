import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';

import {VehiculeComponentComponent} from "./vehicule-component/vehicule-component.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {UpdatecarComponent} from "./updatecar/updatecar.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {CreatelivComponent} from "./createliv/createliv.component";
import {CreatecarComponent} from "./createcar/createcar.component";
import {AssaigncartouserComponent} from "./assaigncartouser/assaigncartouser.component";
import {MapComponent} from "./map/map.component";
import {UpLivComponent} from "./up-liv/up-liv.component";
import {ListlivuserComponent} from "./listlivuser/listlivuser.component";


import { AuthGuard } from './_Auth/auth.guard';
import { TestAccesComponent } from './test-acces/test-acces.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { PageNotFoundComponent } from './FrontOffice/page-not-found/page-not-found.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ResetPasswordComponent } from './FrontOffice/reset-password/reset-password.component';
import { ResetPasswordDirectComponent } from './FrontOffice/reset-password-direct/reset-password-direct.component';
import { AssociatioInfoComponent } from './BackOffice/associatio-info/associatio-info.component';
import { GestionProfileComponent } from './BackOffice/gestion-profile/gestion-profile.component';
import { UpdateProfileComponent } from './BackOffice/update-profile/update-profile.component';
import { ListUserComponent } from './BackOffice/list-user/list-user.component';
import { MailboxesComponentComponent } from './BackOffice/mailboxes-component/mailboxes-component.component';
import { ChartsComponent } from './BackOffice/charts/charts.component';
import { MoreInfoUserComponent } from './BackOffice/more-info-user/more-info-user.component';
import { CommandeComponent } from './commande/commande.component';
import { AdmindetailCommandeComponent } from './BackOffice/admindetail-commande/admindetail-commande.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { TraitementCommandeComponent } from './BackOffice/traitement-commande/traitement-commande.component';
import { ShopComponent } from './shop/shop.component';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { AllshopComponent } from './allshop/allshop.component';
import { DetailsComponent } from './details/details.component';
import { PublicationFormComponentComponent } from './FrontOffice/publication-form-component/publication-form-component.component';
import { ReactionComponent } from './FrontOffice/reaction/reaction.component';
import { CommentaireComponent } from './FrontOffice/commentaire/commentaire.component';
import { PublicationComponent } from './BackOffice/publication/publication.component';
import { AdminCatalogueListComponent } from './components/admin-catalogue-list/admin-catalogue-list.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminAllproductlistComponent } from './components/admin-allproductlist/admin-allproductlist.component';
import { AddProductToCatalogueComponent } from './components/add-product-to-catalogue/add-product-to-catalogue.component';
import { CatalogueListComponent } from './components/catalogue-list-component/catalogue-list-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AssociationConnectedComponent } from './BackOffice/association-connected/association-connected.component';
import { ByerConnectedComponent } from './BackOffice/byer-connected/byer-connected.component';
import { DelevryConnectedComponent } from './BackOffice/delevry-connected/delevry-connected.component';
import { SellerConnectedComponent } from './BackOffice/seller-connected/seller-connected.component';
import { DetailspubComponent } from './FrontOffice/detailspub/detailspub.component';
import { AssociationAllproductlistComponent } from './components/association-allproductlist/association-allproductlist.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {
      path:'publication',
      component:PublicationComponent
    },
    {
      path:'ByerConnected',
      component:ByerConnectedComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path:'SellerConnected',
      component:SellerConnectedComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path:'AssociationConnected',
      component:AssociationConnectedComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path:'DelevryConnected',
      component:DelevryConnectedComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path:'home',
      component:BodyAdminComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}  },
    {
      path: 'Listvecule',component: VehiculeComponentComponent, canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path: 'AddCar',component: AddCarComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path: 'updatecar/:id',component: UpdatecarComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path: 'livraison',component: DeliveryComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path: 'Createliv',component: CreatelivComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path: 'assaignusercar',component: AssaigncartouserComponent}
    ,
    {
      path: 'updateLiv/:id',component: UpLivComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
     {
      path:'listuser',
      component:ListUserComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    { path: 'Detailsusers/:id', component: MoreInfoUserComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']} }
    ,{
      path:'AssociationInfo',
      component:AssociatioInfoComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
      path:'GestionProfile',
      component:GestionProfileComponent,canActivate:[AuthGuard],data:{autority:['USER']}
    },
    {
      path:'UpdateProfile',
      component:UpdateProfileComponent,canActivate:[AuthGuard],data:{autority:['USER']}
    },
    {
      path:'Mail',
      component:MailboxesComponentComponent,
    },
    {path:'admindetailcommande/:id', component:AdmindetailCommandeComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}},
    {path:'traitementCommande', component:TraitementCommandeComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}},


    { path: 'catalogues', component: AdminCatalogueListComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']} },
    { path: 'catalogues/:id/produits', component: AdminProductListComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']} },
    { path: 'produits', component: AdminAllproductlistComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}},
    { path: 'produits/:id', component: AddProductToCatalogueComponent ,canActivate:[AuthGuard],data:{autority:['ADMIN']}},

  ]
  },

  {path:'user',
   component:AllTemplateUserComponent,
  children:[
    {path:'home',component:BodyUserComponent },
    {path:'contacter',component:ContactComponent },
    {path:'commande', component:CommandeComponent },
    {path:'product', component:ProductComponent},
    {path:'panier', component:CartComponent},
    {path:'detailcommande/:id', component:DetailCommandeComponent},
    { path: 'addShop', component: ShopComponent },
    { path: 'allproduit', component: AllProduitComponent },
    { path: 'allshop', component: AllshopComponent },
    {path:'publication',component:PublicationComponent},
    {path:'addpub',component:PublicationFormComponentComponent},
    
    {path:'commentaires/:idpub',component:CommentaireComponent},

    {path:'reaction/:idpub',component:ReactionComponent},
    //Ma tekhdemch khater ma tjich
   /* {path:'aa/:id',component:PublicationComponent},*/
    {
      path:'detailss/:id',
      component:DetailspubComponent
    },



    {
      path:'addcar',
      component:CreatecarComponent,canActivate:[AuthGuard],data:{autority:['DELEVRY']}
    }
    ,
    {
      path:'map',
      component:MapComponent,canActivate:[AuthGuard],data:{autority:['DELEVRY']}
    },
    {
      path:'listliv',
      component:ListlivuserComponent,canActivate:[AuthGuard],data:{autority:['DELEVRY']}
    },
        {path:'login',
    component:TestAccesComponent},
    {path:'register',
    component:RegisterComponent},
    {path:'ResetPassword',
    component:ResetPasswordComponent},
    {path:'ResetPasswordDirect',
    component:ResetPasswordDirectComponent},
    {path:'Chart',
    component:ChartsComponent},

    { path: 'catalogues', component: CatalogueListComponent },
    { path: 'catalogues/:id/produits', component: ProductListComponent },
    { path: 'association/produits', component: AssociationAllproductlistComponent }
 
  ]
  },
  {path : 'details/:id', component : DetailsComponent} ,


 
  {path:'forbidden',
  component:ForbiddenComponent},
  {path:'NotFound',
  component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

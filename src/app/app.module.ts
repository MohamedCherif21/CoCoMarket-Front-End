import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './BackOffice/header-admin/header-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FotterAdminComponent } from './BackOffice/fotter-admin/fotter-admin.component';
import { SideBarAdminComponent } from './BackOffice/side-bar-admin/side-bar-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FotterUserComponent } from './FrontOffice/fotter-user/fotter-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';

import { VehiculeComponentComponent } from './vehicule-component/vehicule-component.component';


import { AddCarComponent } from './add-car/add-car.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CreatelivComponent } from './createliv/createliv.component';
import { CreatecarComponent } from './createcar/createcar.component';
import { AssaigncartouserComponent } from './assaigncartouser/assaigncartouser.component';
import { MapComponent } from './map/map.component';
import { UpLivComponent } from './up-liv/up-liv.component';
import { ListlivuserComponent } from './listlivuser/listlivuser.component';

import { PageNotFoundComponent } from './FrontOffice/page-not-found/page-not-found.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { TestAccesComponent } from './test-acces/test-acces.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/user.service';
import { AuthInterceptor } from './_Auth/auth.interceptor.spec';
import { AuthGuard } from './_Auth/auth.guard';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ResetPasswordComponent } from './FrontOffice/reset-password/reset-password.component';
import { ResetPasswordDirectComponent } from './FrontOffice/reset-password-direct/reset-password-direct.component';
import { AssociatioInfoComponent } from './BackOffice/associatio-info/associatio-info.component';
import { GestionProfileComponent } from './BackOffice/gestion-profile/gestion-profile.component';
import { UpdateProfileComponent } from './BackOffice/update-profile/update-profile.component';
import { ListUserComponent } from './BackOffice/list-user/list-user.component';
import { MoreInfoUserComponent } from './BackOffice/more-info-user/more-info-user.component';
import { MailboxesComponentComponent } from './BackOffice/mailboxes-component/mailboxes-component.component';
import { ChartsComponent } from './BackOffice/charts/charts.component';
import { AdmindetailCommandeComponent } from './BackOffice/admindetail-commande/admindetail-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CommandeComponent } from './commande/commande.component';
import { TraitementCommandeComponent } from './BackOffice/traitement-commande/traitement-commande.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ShopComponent } from './shop/shop.component';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { AllshopComponent } from './allshop/allshop.component';
import { DetailsComponent } from './details/details.component';
import { CommentaireComponent } from './FrontOffice/commentaire/commentaire.component';
import { ReactionComponent } from './FrontOffice/reaction/reaction.component';
import { PublicationFormComponentComponent } from './FrontOffice/publication-form-component/publication-form-component.component';
import { PublicationComponent } from './BackOffice/publication/publication.component';
import { CatalogueListComponent } from './components/catalogue-list-component/catalogue-list-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminCatalogueListComponent } from './components/admin-catalogue-list/admin-catalogue-list.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminAllproductlistComponent } from './components/admin-allproductlist/admin-allproductlist.component';
import { AddProductToCatalogueComponent } from './components/add-product-to-catalogue/add-product-to-catalogue.component';
import { ByerConnectedComponent } from './BackOffice/byer-connected/byer-connected.component';
import { DelevryConnectedComponent } from './BackOffice/delevry-connected/delevry-connected.component';
import { AssociationConnectedComponent } from './BackOffice/association-connected/association-connected.component';
import { SellerConnectedComponent } from './BackOffice/seller-connected/seller-connected.component';
import { DetailspubComponent } from './FrontOffice/detailspub/detailspub.component';
import { CategorieofproductComponent } from './categorieofproduct/categorieofproduct.component';
import { ContactComponent } from './contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    BodyAdminComponent,
    FotterAdminComponent,
    SideBarAdminComponent,
    AllTemplatesAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FotterUserComponent,
    HeaderUserComponent,
    
    VehiculeComponentComponent,
    AddCarComponent,
    UpdatecarComponent,
    DeliveryComponent,
    CreatelivComponent,
    CreatecarComponent,
    AssaigncartouserComponent,
    MapComponent,
    UpLivComponent,
    ListlivuserComponent,

    TestAccesComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordDirectComponent,
    AssociatioInfoComponent,
    GestionProfileComponent,
    UpdateProfileComponent,
    ListUserComponent,
    MoreInfoUserComponent,
    MailboxesComponentComponent,
    ChartsComponent,
    AdmindetailCommandeComponent,
    DetailCommandeComponent,
    CartComponent,
    ProductComponent,
    CommandeComponent,
    TraitementCommandeComponent,
    AllProduitComponent,
    AllshopComponent,
    ProductComponent,
    ShopComponent,
    DetailsComponent,
    CommentaireComponent,
    ReactionComponent,
    PublicationFormComponentComponent,
    PublicationComponent,

    CatalogueListComponent,
    ProductListComponent,
    AdminCatalogueListComponent,
    AdminProductListComponent,
    AdminAllproductlistComponent,
    AddProductToCatalogueComponent,
    ByerConnectedComponent,
    DelevryConnectedComponent,
    AssociationConnectedComponent,
    SellerConnectedComponent,
    DetailspubComponent,
    CategorieofproductComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxStarRatingModule,



  ],
    providers: [ AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  UserService],

  bootstrap: [AppComponent],
})
export class AppModule { }

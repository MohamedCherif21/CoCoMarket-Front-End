import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../Service/shop.service';
import { Observable, map } from 'rxjs';
import { Raitingproduct } from '../Models/raitingproduct';
import { RaitingService } from '../Service/raiting.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Categorie } from '../Models/categorie';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent implements OnInit {
  public myData: any;
  public produit: any = {};
  public selectedProduits: any[] = [];
  public sumRaiting: number = 0;
 public  raitingComparison: string = '';
 public categories!: Categorie[];
 public categorieId!: number;


  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private raitingService: RaitingService,
    private http: HttpClient,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getDataFromService().subscribe((data) => {
      console.log('data', data);
      this.myData = data;
    });
    console.log('test ', this.myData)
    this.getCategories();

    
  }

  getDataFromService(): Observable<any> {
    let id = this.route.snapshot.paramMap.get('id');
    let int_id = Number(id);
    return this.shopService.getSingleShop(int_id);
  }

  
  ajouterRainting(idProduit: number, raintingP: Raitingproduct): void {
    this.raitingService.ajouterRainting(idProduit, raintingP)
      .subscribe(() => console.log('Le raiting a été ajouté avec succès.'));
  }

  getCategories(): void {
    this.shopService.getAllCategories().subscribe(categories => this.categories = categories);
  }
  

  ajouterProduit(): void {
    let idShop = this.myData.id;
    let idCateg = this.categorieId;
    // Récupération de la date actuelle
    // Formatage de la date
    this.produit.datePublication = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // Ajout du produit au shop et à la catégorie
    this.shopService.ajouterProduitAuShopEtCategorie(this.produit, idShop, idCateg)
      .subscribe(() => console.log('Le produit a été ajouté avec succès.'));
      
  }

 
  
 

  
}
 


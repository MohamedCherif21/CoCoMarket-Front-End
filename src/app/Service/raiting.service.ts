import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raitingproduct } from '../Models/raitingproduct';

@Injectable({
  providedIn: 'root'
})
export class RaitingService {


//private baseUrl = 'http://localhost:8088/ajouterRainting/{{idProduit}}'; // l'URL de base de votre application Spring

constructor(private http: HttpClient) { }

ajouterRainting(idProduit: number, raintingP: Raitingproduct) {
  
  return this.http.post('http://localhost:8088/ajouterRainting/'+idProduit, raintingP);
}

}
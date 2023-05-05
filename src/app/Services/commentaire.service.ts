import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commentaire } from '../Models/commentaire';




@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  
  constructor(private http: HttpClient) { }

  ajouterCommentaire(publicationId: number, commentaire: Commentaire) {
   // const url = `/api/publications/${publicationId}/commentaires`;
    return this.http.post<Commentaire>("http://localhost:8088/question/"+publicationId+"/commentaires",commentaire);
  }
}

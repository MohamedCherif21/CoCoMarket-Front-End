import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reaction } from '../Models/reaction';
@Injectable({
  providedIn: 'root'
})
export class ReactionService {

 constructor(private http: HttpClient) { }


 ajouterReaction(userId: number, publicationId: number,reactionType: string) {
 
    return this.http.post<Reaction>("http://localhost:8088/Reaction/"+userId+"/publications/"+publicationId+"/reactions?reactionType="+reactionType,reactionType);
  }

  getReaction(userId: number, publicationId: number,reactionType: string){
    return this.http.get<Reaction>("")
  }
  

}

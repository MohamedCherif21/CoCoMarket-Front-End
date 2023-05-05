import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Models/commentaire';
import { Router } from '@angular/router';
import { CommentaireService } from '../../Services/commentaire.service';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{

  commentaire:Commentaire= new Commentaire();

  constructor(private CommentaireService: CommentaireService, private router:Router) { }



  ajouterCommentaire(publicationId: number): void {
    this.CommentaireService.ajouterCommentaire(publicationId,this.commentaire)
      .subscribe();
  }

  ngOnInit(): void {
  }
}

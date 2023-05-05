import { Component, OnInit } from '@angular/core';
import { Reaction } from 'src/app/Models/reaction';
import { ReactionService } from 'src/app/Services/reaction.service';
import { Router } from '@angular/router';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit{

  reaction:Reaction= new Reaction();

  Reaction = {
    reactionType: ''
  };

  constructor(private reactionService: ReactionService, private router:Router) { }


  ngOnInit(): void {
  }


  ajouterReaction(userId:number,publicationId: number) {
    this.reactionService.ajouterReaction(userId,publicationId,this.reaction.reactionType)
      .subscribe(()=>this.router.navigateByUrl("/user/publication"))

  }

getReaction(userId: number, publicationId: number, reactionType: string) {
  this.reactionService.getReaction(userId, publicationId, reactionType)
    .subscribe(() => {
      console.log();
    });



  }
}

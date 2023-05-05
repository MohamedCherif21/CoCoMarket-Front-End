import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'src/app/Models/publication';
import { PulicationService } from 'src/app/Services/pulication.service';
 
 
@Component({
  selector: 'app-publication-form-component',
  templateUrl: './publication-form-component.component.html', 
  styleUrls: ['./publication-form-component.component.css']
})
export class PublicationFormComponentComponent implements OnInit {
  publication:Publication= new Publication();

  constructor(private publicationService: PulicationService, private router:Router) { }

  ngOnInit(): void {
  }

  ajouterPublication(userId:number): void {
    this.publicationService.ajouterPublication(userId,this.publication)
      .subscribe( response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      
  
  }
}

  





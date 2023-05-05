import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PulicationService } from 'src/app/Services/pulication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit{
  publication:any;
  constructor(private service:PulicationService, private router:Router){};
 
  ngOnInit(): void {
   this.service.getPub().subscribe((data)=>
   {
    console.log(data);
    this.publication=data
   }
   );
   

  
  
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PulicationService } from 'src/app/Services/pulication.service';

@Component({
  selector: 'app-detailspub',
  templateUrl: './detailspub.component.html',
  styleUrls: ['./detailspub.component.css']
})
export class DetailspubComponent {

  publication:any;
  id!:number;
  constructor(private service:PulicationService, private router:ActivatedRoute){};
  
  ngOnInit():void{
    this.router.params.subscribe(params => {
      this.id = +params['id'];
      console.log("Id :"+ this.id);
      this.service.getbyid(this.id).subscribe((data)=>{
        console.log(data)
        this.publication=data
      });
    });
}
deletepub(id:number){
  this.service.Deletepub(id).subscribe(()=>this.service.getPub().subscribe(res=>this.publication=res));

}

}


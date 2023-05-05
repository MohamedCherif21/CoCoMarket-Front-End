import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-more-info-user',
  templateUrl: './more-info-user.component.html',
  styleUrls: ['./more-info-user.component.css']
})
export class MoreInfoUserComponent {
  user: any ;
  //users: any;
  //user: any;
  id!:number
  constructor(private service:UserService,private route: ActivatedRoute) { }
 
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("Id :"+ this.id);
      this.service.getdUserById(this.id).subscribe((data)=>{
        console.log(data)
        this.user=data
      });
    });

  }
}

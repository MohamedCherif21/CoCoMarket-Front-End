import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: any ;
  //users: any;
  //user: any;
  NbrByer!:any;
  NbrSeller!:any;
  NbrAssociation!:any;
  NbrDelevry!:number;
  constructor(private service:UserService) {}
 
  ngOnInit(): void {
    this.NbrUserWithRole("BYER");
    this.NbrUserWithRole("SELLER");
   this.NbrUserWithRole("ASSOCIATION");
   this.NbrUserWithRole("DELEVRY");
   
    this.service.getUsers().subscribe((data)=>{
      console.log("NgOnInit {  "+this.NbrDelevry+"}");
      console.log(data)
      this.users=data
    });
  }
  public BanUnBan(id:number){
    this.service.DisableUnDisabe(id).subscribe((data)=>{
      console.log(data)
    });
  }
  public ListUserWithRole(role:string){
    this.service.getListUserWithRole(role).subscribe((data)=>{
      console.log(data)
    });
  }
  public NbrUserWithRole(role:string):any{
    this.service.getLengthByRole(role).subscribe((data)=>{
      if(role=="BYER"){
        this.NbrByer=data;
      }
      if(role=="SELLER"){
        this.NbrSeller=data;
      }
      if(role=="ASSOCIATION"){
        this.NbrAssociation=data;
      }
      if(role=="DELEVRY"){
        this.NbrDelevry=data;
      }
      console.log(role+ " : "+data)
    });
  }
  
}

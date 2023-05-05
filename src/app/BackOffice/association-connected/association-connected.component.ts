import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-association-connected',
  templateUrl: './association-connected.component.html',
  styleUrls: ['./association-connected.component.css']
})
export class AssociationConnectedComponent implements OnInit {
  users!:any;
  
  constructor(private service:UserService) {}
  
  ngOnInit() {
    
   
    this
    .ListUserWithRole("ASSOCIATION");
  }
  isVide(){
    if(this.users !=null)
    return false;
    return true;
  }

  public BanUnBan(id:number){
    this.service.DisableUnDisabe(id).subscribe((data)=>{
      console.log(data)
    });
  }
  public ListUserWithRole(role:string){
    this.service.GetConnectedWithRole(role).subscribe((data)=>{
      this.users=data
      console.log(data)
    });
  }

}
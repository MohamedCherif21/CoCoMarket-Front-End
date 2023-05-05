import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-seller-connected',
  templateUrl: './seller-connected.component.html',
  styleUrls: ['./seller-connected.component.css']
})
export class SellerConnectedComponent implements OnInit {
  users!:any;
  
  constructor(private service:UserService) {}
  
  ngOnInit() {

   
    this
    .ListUserWithRole("SELLER");
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

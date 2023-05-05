import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delevry-connected',
  templateUrl: './delevry-connected.component.html',
  styleUrls: ['./delevry-connected.component.css']
})
export class DelevryConnectedComponent implements OnInit {
  users!:any;
  
  constructor(private service:UserService) {}
  
  ngOnInit() {

   
    this
    .ListUserWithRole("DELEVRY");
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
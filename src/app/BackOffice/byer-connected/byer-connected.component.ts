import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-byer-connected',
  templateUrl: './byer-connected.component.html',
  styleUrls: ['./byer-connected.component.css']
})
export class ByerConnectedComponent implements OnInit {
  users!:any;
  
  constructor(private service:UserService) {}
  
  ngOnInit() {

   
    this
    .ListUserWithRole("BYER");
  }

  public BanUnBan(id:number){
    this.service.DisableUnDisabe(id).subscribe((data)=>{
      console.log(data)
    });
  }
  public ListUserWithRole(role:string){
    this.service.GetConnectedWithRole(role).subscribe((data)=>{
      this.users=data;
      console.log("LES BYER :"+data);
    });
  }

}
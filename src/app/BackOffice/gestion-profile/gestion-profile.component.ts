import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-gestion-profile',
  templateUrl: './gestion-profile.component.html',
  styleUrls: ['./gestion-profile.component.css']
})
export class GestionProfileComponent implements OnInit {


  UserConnecter!:string;
  user!:any;
  constructor( private userService:UserService,
    private userAuthService:UserAuthService ){}

  ngOnInit(): void {
        //get email from JWT
        this.UserConnecter= this.userAuthService.GetMailConnecter();
        //Get User By Mail from Data base
        this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
          this.user=data;
          console.log("**************");
          console.log(data);
        });
  }
}

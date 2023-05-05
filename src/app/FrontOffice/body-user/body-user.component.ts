
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})

export class BodyUserComponent implements OnInit {
  UserConnecter!: string;

  constructor( private userService:UserService,
    private userAuthService:UserAuthService ){}
    

  ngOnInit(): void {
    //get email from JWT
    this.UserConnecter= this.userAuthService.GetMailConnecter();
    //Get User By Mail from Data base
    this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
      console.log("**************");
      console.log(data);
    });
  }

}

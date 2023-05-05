import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

import { UserForUpdate } from 'src/app/Models/UserForUpdate';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  request!: string;
  file!: File;


  constructor(private authService: UserService,private router: Router,
    private userAuthService:UserAuthService 
    ) { 
  }
  UserConnecter!: string;
  ReadyForUpdate!:any;  //hedha fih All info User


  ngOnInit(): void {
    //get email from JWT
    this.UserConnecter= this.userAuthService.GetMailConnecter();
    //Get User By Mail from Data base
    this.authService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
      console.log("**************");
      this.ReadyForUpdate=data;
      console.log(data);

    });
  }


  onFileSelected(event: any) {
    this.file = event.target.files[0];
    }

  onUpdateUser(form:NgForm){
    const formData = new FormData();
    
    formData.append('request', this.request);
    formData.append('file', this.file);
    const formValue=form.value;
    console.log(form.value);
   // const dataString = '{"last_name":"cherif","first_name":"Hamma","email":"zaafouri.amir@esprit.tn","password":"123","num_phone":"+21655619255", "autority":[{"name":"ADMIN"}]}';
   // const dataString2 = "{"+"\"last_name \":"+"\""+formValue.lastName+"\""+","+ "\"first_name\":"+"\""+formValue.lastName+"\""+","+ "\"email\":"+"\""+formValue.email+"\""+","+"\"password\":"+"\""+formValue.password+ "\""+ ","+ "\"num_phone\":"+"\""+formValue.numPhone+"\""+","+ "\"autority\":"+this.AuthByer+"}" ;
   let user: UserForUpdate = {
      id:this.ReadyForUpdate.id,
     last_name: formValue.lastName,
     first_name: formValue.firstName,
     premium: false,
     email: formValue.email,
     loyalty_point: 0,
     Assosiation_info: formValue.assosiationInfo,
     Files: '',
     region: formValue.region,
     enabled: true,
     nbr_tentatives: 0,
     availability: true,
     num_phone: formValue.numPhone,
   };
   this.authService.UpdateUser(user,this.file)
   .subscribe((response: any) => {
     console.log(response);
   });
  }
}

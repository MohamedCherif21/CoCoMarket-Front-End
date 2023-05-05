import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { DataBindingService } from 'src/app/Services/data-binding.service';
import { Authority } from 'src/app/Models/Authority';

import { __values } from 'tslib';
import { User } from 'src/app/model/User';
import { Cart } from 'src/app/model/cart';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  selectedValue!:any;
  request!: string;
  file!: File;
  TypeAccount!:any;
   authByer: Authority[] = [
    { name: 'USER' }
  ];
  
  constructor(private authService: UserService,private router: Router,
    private data: DataBindingService
    ) { 
  }
  ngOnInit(): void {

  }
  sendValue() {
    this.data.sharedValue =  document.querySelector<HTMLInputElement>("#emaill")!.value.toString();
  }

  onRegister(form: NgForm) {
    const selectEl = document.querySelector('#mySelect') as HTMLSelectElement;
    selectEl.addEventListener('change', (event) => {
       this.selectedValue = selectEl.value;
      console.log(this.selectedValue); // outputs the selected value to the console
    });
    if(this.selectedValue== "BYER"){
      this.authByer=[
        {  name: 'BYER' },
        { name: 'USER' }
      ];
    }else if(this.selectedValue== "SELLER"){
      this.authByer=[
        {  name: 'SELLER' },
        { name: 'USER' }
      ];
    }else if(this.selectedValue== "DELEVRY"){
      this.authByer=[
        {  name: 'DELEVRY' },
        { name: 'USER' }
      ];
    }
    else if(this.selectedValue== "KOFFA"){
      this.authByer=[
        {  name: 'KOFFA' },
        { name: 'USER' }
      ];
    }


    const formData = new FormData();
    
    formData.append('request', this.request);
    formData.append('file', this.file);
    const formValue=form.value;
    console.log(form.value);
   // const dataString = '{"last_name":"cherif","first_name":"Hamma","email":"zaafouri.amir@esprit.tn","password":"123","num_phone":"+21655619255", "autority":[{"name":"ADMIN"}]}';
   // const dataString2 = "{"+"\"last_name \":"+"\""+formValue.lastName+"\""+","+ "\"first_name\":"+"\""+formValue.lastName+"\""+","+ "\"email\":"+"\""+formValue.email+"\""+","+"\"password\":"+"\""+formValue.password+ "\""+ ","+ "\"num_phone\":"+"\""+formValue.numPhone+"\""+","+ "\"autority\":"+this.AuthByer+"}" ;
   let user: User = {
     last_name: formValue.lastName,
     first_name: formValue.firstName,
     premium: false,
     email: formValue.email,
     password: formValue.password,
     loyalty_point: 0,
     Assosiation_info: formValue.assosiationInfo,
     Files: '',
     region: formValue.region,
     enabled: true,
     nbr_tentatives: 0,
     availability: true,
     num_phone: formValue.numPhone,
     autority: this.authByer,
     id: 0,
     cart: new Cart,
   };
    this.authService.register(user,this.file)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: NgForm) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ 'confirmedValidator': true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

  sendCodeMail(To :string){
    this.sendValue();

 let resp= this.authService.SendCodeMail(To);
resp.subscribe((data)=>{
  console.log(data)
  if(data != null){
    this.router.navigate(['/user/ResetPasswordDirect'])
  }
  else{
    this.router.navigate(['/user/ResetPassword'])
  }
});
  }


  

}
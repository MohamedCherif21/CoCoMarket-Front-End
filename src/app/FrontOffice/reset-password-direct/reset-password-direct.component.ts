import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { DataBindingService } from 'src/app/Services/data-binding.service';

@Component({
  selector: 'app-reset-password-direct',
  templateUrl: './reset-password-direct.component.html',
  styleUrls: ['./reset-password-direct.component.css']
})
export class ResetPasswordDirectComponent implements OnInit{
  receivedValue: any;
  test : any;
  Correct:boolean=false;
  constructor(private authService: UserService,private router: Router,private data: DataBindingService) {
    this.receivedValue = this.data.sharedValue;
  }
  ngOnInit(): void {
    this.VerfierCode();
    throw new Error('receivedValue :'+this.receivedValue);
  }
    public VerfierCode() : any {
      setTimeout(() => {
        this.test = document.querySelector<HTMLInputElement>("#username")!.value.toString();
        let resp= this.authService.VerifCodeMail(this.test);
        resp.subscribe((data)=>{
          console.log("Resulta Of verifCode:"+data)
          this.Correct=data;
          return data;
        });
      }, 40000);
    }

  ResetPassword(RestForm: NgForm){  
   let newPswd =RestForm.value.Newpasword;
   let code =RestForm.value.code;
   console.log("All input : "+code+"\n"+"newPswd :"+newPswd+"\n"+"mail :"+this.receivedValue+"\n");
    let resp= this.authService.UpdatePassword(this.receivedValue,code,newPswd);
   resp.subscribe((data)=>{
     console.log(data)
     if(data != null){
       this.router.navigate(['/user/ResetPasswordDirect'])
     }
     else{
       this.router.navigate(['user/login'])
     }
   });
     }   

  sendCodeMail(To :string){  
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
}
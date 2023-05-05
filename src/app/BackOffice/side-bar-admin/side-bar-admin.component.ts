import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent {

  constructor(private R:Router){}

  traitement(){
    this.R.navigate(['admin/traitementCommande']);
  }

}

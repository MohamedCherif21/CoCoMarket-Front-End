import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { Observable, map } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  public chart: any;
 public NbrDelevry:number=0;
 public NbrAssociation:number=0;
 public NbrSeller:number=0;
 public NbrByer:number=0;
  /////
  public NbrDelevryC:number=0;
  public NbrAssociationC:number=0;
  public NbrSellerC:number=0;
  public NbrByerC:number=0;
  constructor(private service:UserService){}
  ngOnInit() {
    this.service.getLengthByRole("BYER").subscribe((data) => {
     // console.log(data);
      this.NbrByer = data;
  
      this.NbrUserWithRole("DELEVRY").subscribe((data) => {
       // console.log(data);
        this.NbrDelevry = data;
  
        this.NbrUserWithRole("SELLER").subscribe((data) => {
         // console.log(data);
          this.NbrSeller = data;
  
          this.NbrUserWithRole("ASSOCIATION").subscribe((data) => {
           // console.log(data);
            this.NbrAssociation = data;
            this.createChart();
            this.NbrUserConnecteWithRole("BYER").subscribe((data) => {
              console.log(data);
              this.NbrByerC = data;
                
              this.NbrUserConnecteWithRole("DELEVRY").subscribe((data) => {
                console.log(data);
                this.NbrDelevryC = data;
  
                this.NbrUserConnecteWithRole("SELLER").subscribe((data) => {
                  console.log(data);
                  this.NbrSellerC = data;
  
                  this.NbrUserConnecteWithRole("ASSOCIATION").subscribe((data) => {
                    console.log(data);
                    this.NbrAssociationC = data;
                    
                    
                    
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  createChart(){
    const currentDate: Date = new Date();
  const dateString: string = currentDate.toISOString().substring(0, 10);
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["BYER", "DELEVRY", "SELLER","ASSOCIATION"  ,
								  ], 
	       datasets: [
          {
            label: "Existe",
            data: [ this.NbrByer,this.NbrDelevry, this.NbrSeller, this.NbrAssociation, 
								],
            backgroundColor: 'blue'
          },
          {
            label: "Availble",
            data: [this.NbrByerC,this.NbrDelevryC, this.NbrSellerC, this.NbrAssociationC,  ],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  
  public NbrUserWithRole(role:string): Observable<number> {
    return this.service.getLengthByRole(role).pipe(map(data => {
      if (role === "BYER") {
        this.NbrByer = data;
      }
      if (role === "SELLER") {
        this.NbrSeller = data;
      }
      if (role === "ASSOCIATION") {
        this.NbrAssociation = data;
      }
      if (role === "DELEVRY") {
        this.NbrDelevry = data;
      }
     // console.log(role + " : " + data);
      return data;
    }));
  }
  public NbrUserConnecteWithRole(role:string): Observable<number> {
    return this.service.getLengthByRoleConnect(role).pipe(map(data => {
      if (role === "BYER") {
        this.NbrByer = data;
      }
      if (role === "SELLER") {
        this.NbrSeller = data;
      }
      if (role === "ASSOCIATION") {
        this.NbrAssociation = data;
      }
      if (role === "DELEVRY") {
        this.NbrDelevry = data;
      }
      console.log(role + " : " + data);
      return data;
    }));
  }

}
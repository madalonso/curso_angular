import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  adress: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0 ;

  cities =[
    {name: "Sao Paulo", state:"SP"},
    {name: "Porto Alegre", state:"RS"},
    {name: "Curitiba", state:"PR"},
    {name: "Rio de Janeiro", state:"RS"}
  ];

  clients: any = []; 

   constructor() {
     
    }

  ngOnInit(): void {
    
  }

  save(){
     this.clients.push(
      { 
          name: this.name,
          adress: this.adress,
          city: this.city,
          age: this.age,
          phone: this.phone
      }
    );
    this.cancel();
    
  }

  cancel(){
    this.name = "";
    this.adress = "";
    this.city = "";
    this.phone = "";
    this.age = 0;
  }

  delete(i:number){
    this.clients.splice(i, 1);
  }

}

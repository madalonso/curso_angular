import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  Names = [
    "John",
    "Mary", 
    "Bob",
    "Jane"
  ];

cities =[
  {name: "Sao Paulo", state:"SP"},
  {name: "Porto Alegre", state:"RS"},
  {name: "Curitiba", state:"PR"},
  {name: "Rio de Janeiro", state:"RS"}
];

  constructor() { }

  ngOnInit(): void {
  }

}

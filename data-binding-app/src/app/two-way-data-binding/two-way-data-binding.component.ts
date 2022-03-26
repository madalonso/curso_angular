import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1 :string = "M";
  name2 :string = "D";

  client = {
    firstName: "John",
    lastName: "Bro",
    adress: "St 120",
    age: 40
  }
  constructor() { }

  ngOnInit(): void {
  }

}

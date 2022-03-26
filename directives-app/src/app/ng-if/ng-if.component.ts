import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  bshowName: boolean = false;
  bshowAddress: boolean = false;
  bshowPhone: boolean = false;
  bshowAge: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  //inicializacao no construtor "@Input() client: Client;"
  @Input() client: Client={} as Client;

  constructor() { 
    //this.client={} as Client;
  }

  ngOnInit(): void {
  }

}

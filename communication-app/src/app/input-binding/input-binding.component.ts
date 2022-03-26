import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  
  //@Input() permite receber um valor de onde o componente e chamado (app.component)
  @Input() name: string = "";
  //espera receber o parametro "othername" e atribui esse valor para a variavel last name
  @Input('othername') lastName: string = "";
  @Input() age: number = 0;

  // inicializacao "clients: Client[]=[];" ou no construtor conforme implementado
  clients_inputbinding: Client[];

  constructor() { 
    this.clients_inputbinding = [
      {id:1, name:"Bob", age:30},
      {id:2, name:"Ana", age:20},
      {id:3, name:"John", age:40},
      {id:4, name:"Maria", age:30}];
  }

  ngOnInit(): void {
  }

}

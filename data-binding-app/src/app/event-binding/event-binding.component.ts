import { SelectionChange } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  buttonName = "My button";
  i = 0; 
  spinner_Mode : ProgressSpinnerMode = "determinate";
  btnEnable = true;
  selectDisabled:boolean = false;
  selectOption = 1;
  inputName = "John";

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("click")
  }

  inc(){
    this.i ++;
    this.buttonName = "It was clicked " + this.i + " times";

  
  }

  disabled(){
    this.btnEnable=false;
    this.spinner_Mode = "indeterminate";
    setTimeout(()=>{
      this.btnEnable=true;
      this.spinner_Mode = "determinate";
    }, 3000)
  }

  cbChange(event : any){
    console.log(event.checked);
    this.selectDisabled = event.checked;
    
  }

  selectionChange(event : any){
    console.log(event);
    this.selectOption = event.value;
  }

  inputEvent(event : any){
    console.log(event);
    console.log("event value:" + event.target.value);
    
    this.inputName = event.target.value;
    
  }

}



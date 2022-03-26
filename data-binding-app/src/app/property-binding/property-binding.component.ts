import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  a_color: string = "accent";
  btnDisabled = true;
  a_colors = ['primary', 'accent', 'warn', ''];
  idx=0;
  constructor() { }

  ngOnInit(): void {
    setInterval( ()  => {
      this.idx = (this.idx + 1) % this.a_colors.length
    }, 1000 )
  }

}

import { Component } from "@angular/core";

@Component({
    selector: 'myfirst',
    /*
    selector: 'myfirst' no html: <myfirst></myfirst> 
    selector: '[myfirst]' no html: <div myfirst></div>
    selector: '.myfirst' no html: <div class='myfirst'></div>
    */
    templateUrl: './myfirst.component.html', 
    styleUrls: ['./myfirst.component.css']
})

export class MyFirstComponent{

}

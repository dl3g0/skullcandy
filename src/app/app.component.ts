import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()title: string = 'SkullCandy';
  promociones: boolean = true; //Mostrar o no mostrar promociones en la pagina
 
}


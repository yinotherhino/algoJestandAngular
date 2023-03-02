import { Component, Input } from '@angular/core';
import { faCloud, faSmog, faTemperatureFull, faTemperatureLow, faTemperatureQuarter, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() weather: any= {};
  constructor() { }
  goToCity(city:string){
    console.log(city);
  }
  cloud = faCloud;
  fog = faSmog;
  lowTemp = faTemperatureQuarter;
  midTemp = faTemperatureThreeQuarters;
  highTemp = faTemperatureFull;
}

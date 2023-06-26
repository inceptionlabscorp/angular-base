import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  characters: Character[] = [{
    name: 'Goku',
    power: 15000
  },{
    name: 'Vegeta',
    power: 8500

  },{
    name: 'Trunks',
    power: 3000
  }
];

}

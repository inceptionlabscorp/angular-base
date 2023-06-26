import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  HeroesNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Capitan America'];

  public  deletedHero?: string = '';

  removeLastHero(): void {

    this.deletedHero = this.HeroesNames.pop();


  }
}

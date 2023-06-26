import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name: string = 'ironman';
  age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():String {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name:string):void {
    this.name = name;
  }
  changeHeroAge(age:number):void {
    this.age = age;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;

  }

}

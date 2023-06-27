import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as UUID } from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzService {


  characters: Character[] = [{
    id: UUID(),
    name: 'Goku',
    power: 15000
  },{
    id: UUID(),
    name: 'Vegeta',
    power: 8500

  },{
    id: UUID(),
    name: 'Trunks',
    power: 8500

  }
];





onNewCharacter(character: Character): void {

  //character.id = UUID();
  const newCharacter = {id: UUID(),...character};
  console.log(newCharacter);
  this.characters.push(newCharacter);
}

// onDeleteCharacter(index: number): void {
//   this.characters.splice(index, 1);
// }

deleteCharacterById(id: string): void {
  this.characters = this.characters.filter(character => character.id !== id);
}

}

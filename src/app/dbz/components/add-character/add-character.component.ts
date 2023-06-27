import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character =  {
    name: '',
    power: 0
  }

  emitCharacter():void {

    console.log(this.character);

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 }

}

}

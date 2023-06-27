import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    //default value
    name: 'Trunks',
    power: 1

  }]

  @Output()
  onDeleteIdEvent: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    console.log(id);
    this.onDeleteIdEvent.emit(id);
  }
}

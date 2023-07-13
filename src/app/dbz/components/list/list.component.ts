import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    //objeto por default en caso de no recibir ninguno
    { name: 'Trunks', power: 10 },
  ];

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    // console.log(id)
    //TODO emitir el ID del personaje
    this.onDelete.emit(id);
  }
}

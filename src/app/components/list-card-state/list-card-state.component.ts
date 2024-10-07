import { Component, Input } from '@angular/core';
import { CardTodoComponent } from '../cards/card-todo/card-todo.component';
import { CardDoingComponent } from '../cards/card-doing/card-doing.component';
import { CardDoneComponent } from '../cards/card-done/card-done.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'list-card-state',
  standalone: true,
  imports: [CardTodoComponent, CardDoingComponent, CardDoneComponent, NgClass],
  templateUrl: './list-card-state.component.html',
  styleUrl: './list-card-state.component.scss'
})
export class ListCardStateComponent {
  
  //Inputs
  @Input() cardState: string = '';

}

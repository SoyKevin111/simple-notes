import { Component, Input } from '@angular/core';
import { CardTodoComponent } from '../cards/card-todo/card-todo.component';
import { CardDoingComponent } from '../cards/card-doing/card-doing.component';
import { CardDoneComponent } from '../cards/card-done/card-done.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list-state',
  standalone: true,
  imports: [CardTodoComponent, CardDoingComponent, CardDoneComponent, NgClass],
  templateUrl: './list-state.component.html',
  styleUrl: './list-state.component.scss'
})
export class ListStateComponent {
  
  @Input() cardState:string = '';
  

}

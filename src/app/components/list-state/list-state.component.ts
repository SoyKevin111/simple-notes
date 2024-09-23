import { Component, Input } from '@angular/core';
import { CardComponent } from '../cards/card/card.component';
import { CardV2Component } from '../cards/card-v2/card-v2.component';
import { CardV3Component } from '../cards/card-v3/card-v3.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list-state',
  standalone: true,
  imports: [CardComponent, CardV2Component, CardV3Component, NgClass],
  templateUrl: './list-state.component.html',
  styleUrl: './list-state.component.scss'
})
export class ListStateComponent {
  
  @Input() cardState:string = '';
  

}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'popover-info-project',
  standalone: true,
  imports: [],
  templateUrl: './popover-info-project.component.html',
  styleUrl: './popover-info-project.component.scss'
})
export class PopoverInfoProjectComponent {

  //Inputs
  @Input() titleProject:string = '';
  @Input() descriptionProject:string = '';


  //Métodos
  onClick(event: MouseEvent) {
    event.stopPropagation(); // Detiene la propagación del evento
  }

}

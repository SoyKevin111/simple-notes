import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  //Signals para encender y apagar el toast
  @Input() stateToast: boolean = false; //se activara
  @Output() stateToastEvnEm = new EventEmitter()  //enviando el nuevo state del toast

  //Signal para conformar el toast
  @Input() dataToast:string = ''; //add, delete, exportJson, exportText

  closeToast(){
    this.stateToast = !this.closeToast; //de true a false
    this.stateToastEvnEm.emit(this.stateToast) //ahora sera false
  }



}

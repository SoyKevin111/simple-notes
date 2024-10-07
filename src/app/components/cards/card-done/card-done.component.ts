import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';

@Component({
  selector: 'card-done',
  standalone: true,
  imports: [],
  templateUrl: './card-done.component.html',
  styleUrl: './card-done.component.scss'
})
export class CardDoneComponent {


  //service
  private _toastService = inject(ToastService);

  
  //Métodos

  openToastDel(){
    this._toastService.open(ToastComponent, {stateToast: true, typeToast: 'deleteTask'});
  }
}

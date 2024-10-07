import { Component, inject } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';

@Component({
  selector: 'card-doing',
  standalone: true,
  imports: [],
  templateUrl: './card-doing.component.html',
  styleUrl: './card-doing.component.scss'
})
export class CardDoingComponent {

  //service
  private _toastService = inject(ToastService);


  //Métodos

  finish() {
    this.openToastfinish();
  }

  openToastfinish() {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'completeTask' });
  }

}

import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';
import { TaskMock } from '../../../mocks/projects.mock';

@Component({
  selector: 'card-doing',
  standalone: true,
  imports: [],
  templateUrl: './card-doing.component.html',
  styleUrl: './card-doing.component.scss'
})
export class CardDoingComponent {


  private _toastService = inject(ToastService);

  finish() {
    this.openToastfinish();
  }

  openToastfinish() {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'completeTask' });
  }

}

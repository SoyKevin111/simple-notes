import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';
import { TaskMock } from '../../../mocks/projects.mock';

@Component({
  selector: 'card-done',
  standalone: true,
  imports: [],
  templateUrl: './card-done.component.html',
  styleUrl: './card-done.component.scss'
})
export class CardDoneComponent {



  private _toastService = inject(ToastService);

  openToastDel(){
    this._toastService.open(ToastComponent, {stateToast: true, typeToast: 'deleteTask'});
  }
}

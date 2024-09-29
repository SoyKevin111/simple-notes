import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit} from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'toast-export-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-export-project.component.html',
  styleUrl: './toast-export-project.component.scss'
})
export class ToastExportProjectComponent implements OnInit {

  //servicio
  private _toastService = inject(ToastService);

  @Input() stateExportToast: boolean = false; //se activara

  @Input() dataExportToast: string = ''; //add, delete, exportJson, exportText

  fadingOut: boolean = false;

  ngOnInit(): void {
  if(this.stateExportToast)      {
      setTimeout(()=>{
        this.startFadingOut();
      }, 1500)
    }
  }
  startFadingOut() {
    this.fadingOut = true;
    setTimeout(() => {
      this.closeToastExportProject();
    }, 1500);
  }

  closeToastExportProject() {
    this.stateExportToast = this.stateExportToast = false; //de true a false
    this._toastService.close();
  }



}

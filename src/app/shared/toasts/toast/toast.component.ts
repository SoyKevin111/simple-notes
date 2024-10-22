import { CommonModule } from '@angular/common';
import { Component, ComponentRef, inject, Input, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { dataToast } from '../mocks/toast.mock';

@Component({
  selector: 'toast-export-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {

  //servicio
  private _toastService = inject(ToastService);


  //Inputs
  @Input() stateToast: boolean = false; //se activara
  @Input() typeToast: string = ''; //add, delete, exportJson, exportText
  @Input() entityTitle: string = '' //valor del nombre del nuevo Proyecto.
  //
  dataToast: string = ''; //valor por defecto del mock
  pathToast: string = ''; //valor por defecto del mock
  primaryColor: string = ''; //valor por defecto del mock
  fadingOut: boolean = false;


  //referencia
  toastRef!: ComponentRef<ToastComponent>;

  ngOnInit(): void {

    if (this.typeToast) {
      this.asignToast();
    }
    if (this.stateToast) {
      setTimeout(() => {
        this.startFadingOut();
      }, 1500)
    }
  }



  //métodos
  asignToast() {
    //asignando el dato
    const toastItem = dataToast.find(toast => toast.type == this.typeToast);
    if (toastItem) {
      this.dataToast = toastItem.data;
      this.pathToast = toastItem.path;
      this.primaryColor = toastItem.primarycolor;
    }
  }

  startFadingOut() { //inicio desvanecimiento.
    this.fadingOut = true;
    setTimeout(() => {
      //this._toastService.close(this.toastRef)
      this.closeToast();
    }, 1000);
  }

  closeToast() {
    this.stateToast = this.stateToast = false; //de true a false
    this._toastService.close(this.toastRef);
  }



}

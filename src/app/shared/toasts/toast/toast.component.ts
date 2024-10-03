import { CommonModule } from '@angular/common';
import { Component, ComponentRef, inject, Input, OnInit} from '@angular/core';
import { ToastService } from '../toast.service';
import {dataToast} from '../mocks/toast.mock';

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

  @Input() stateToast: boolean = false; //se activara

  @Input() typeToast: string = ''; //add, delete, exportJson, exportText

  dataToast:string = '';
  pathToast:string = '';
  primaryColor:string = '';
  

  fadingOut: boolean = false;

  //referencia
  toastRef!:ComponentRef<ToastComponent>;

  ngOnInit(): void {

    if(this.typeToast){
      this.asignToast();
    }
    else{
      console.log('Asigna un type.');
    }

    if(this.stateToast){
      setTimeout(()=>{
        this.startFadingOut();
      }, 1500)
    }
  }

  asignToast(){
    //asignando el dato
    const toastItem = dataToast.find(toast => toast.type == this.typeToast);
    if(toastItem){
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

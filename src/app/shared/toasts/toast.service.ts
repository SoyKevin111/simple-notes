import { Injectable, ComponentRef, ApplicationRef, Type, EnvironmentInjector, createComponent, inject, Component} from '@angular/core';
import { ToastComponent } from './toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  //toast generico
  //private toastRef: ComponentRef<any> | null = null;
  private toasts: ComponentRef<ToastComponent>[] = [];

  private _injector = inject(EnvironmentInjector);
  private _appRef = inject(ApplicationRef);

  //constructor() { }

  open(component: Type<ToastComponent>, inputs?: Partial<ToastComponent>)
    : ComponentRef<ToastComponent> {

    const toastRef = createComponent(component, {
      environmentInjector: this._injector
    });

    //asignar inputs
    if (inputs) {
      console.log(inputs);

      Object.assign(toastRef.instance, inputs);
    }

    //asignando el toast ref a la instancia (y sus propiedades) del ToastComponent.
    toastRef.instance.toastRef = toastRef;//el de const

    this._appRef.attachView(toastRef.hostView);
    const domElem = (toastRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.toasts.push(toastRef);

    return toastRef;
  }

  close(toastRef:ComponentRef<ToastComponent>): void {
    if (toastRef) {
      this._appRef.detachView(toastRef.hostView);
      toastRef.destroy();
      
      //eliinar de la lista
      this.toasts = this.toasts.filter(t => t !== toastRef);
    }
  }


  closeAll(): void {
    this.toasts.forEach(toastRef => this.close(toastRef));
  }

  
}


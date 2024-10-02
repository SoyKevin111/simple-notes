import { Injectable, ComponentRef, ApplicationRef, Type, EnvironmentInjector, createComponent, inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  //toast generico
  //private toastRef: ComponentRef<any> | null = null;
  private toasts: ComponentRef<any>[] = [];

  private _injector = inject(EnvironmentInjector);
  private _appRef = inject(ApplicationRef);

  //constructor() { }

  open<T extends object>(component: Type<T>, inputs?: Partial<T>)
    : ComponentRef<T> {

    const toastRef = createComponent(component, {
      environmentInjector: this._injector
    });

    //asignar inputs
    if (inputs) {
      console.log(inputs);

      Object.assign(toastRef.instance, inputs);
    }

    this._appRef.attachView(toastRef.hostView);
    const domElem = (toastRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return toastRef;
  }

  close(toastRef:ComponentRef<any>): void {
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


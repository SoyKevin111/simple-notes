import { Injectable, ComponentRef, ApplicationRef, Type, EnvironmentInjector, createComponent, inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  //toast generico
  private toastRef: ComponentRef<any> | null = null;

  private _injector = inject(EnvironmentInjector);
  private _appRef = inject(ApplicationRef);

  //constructor() { }

  open<T>(component: Type<T>, inputs?: Partial<T>)
    : ComponentRef<T> {

    this.toastRef = createComponent(component, {
      environmentInjector: this._injector
    });

    //asignar inputs
    if (inputs) {
      console.log(inputs);

      Object.assign(this.toastRef.instance, inputs);
    }

    this._appRef.attachView(this.toastRef.hostView);
    const domElem = (this.toastRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return this.toastRef;
  }

  close(): void {
    if (this.toastRef) {
      this._appRef.detachView(this.toastRef.hostView);
      this.toastRef.destroy();
      this.toastRef = null;
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { FormGroup, ReactiveFormsModule,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'modal-add-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-add-card.component.html',
  styleUrl: './modal-add-card.component.scss'
})
export class ModalAddCardComponent {

  //Formulario reactivo
  addTaskForm: FormGroup;
  private _fb = inject(FormBuilder);

  @Input() modal_addTaskVisible: boolean = false;
  private _modalService = inject(ModalService);

  constructor() {
    this.addTaskForm = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      state: ['', [Validators.required]]
    })
  }


  closeModal_addTask() {
    this.modal_addTaskVisible = false;
    this._modalService.close();
  }

  onSubmit(): void {
    
    if (this.addTaskForm.get('state')?.invalid) {
      this.addTaskForm.get('state')?.markAsTouched();
    }
    
    if (this.addTaskForm.valid) {
      this.modal_addTaskVisible = false;
      this._modalService.close();
      // Servicio para agregar la tarjeta
      console.log(`name: ${this.addTaskForm.get('name')?.value} - Description: ${this.addTaskForm.get('description')?.value} - State: ${this.addTaskForm.get('state')?.value}`);
    }
  }
  

  
  

}

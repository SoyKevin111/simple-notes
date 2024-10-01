import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule
  ],
  templateUrl: './modal-search.component.html',
  styleUrl: './modal-search.component.scss'
})
export class ModalSearchComponent {

  @Input() modal_SearchVisible:boolean = false;
  private _modalService =  inject(ModalService);
  private _fb = inject(FormBuilder)

  searchForm:FormGroup;

  constructor(){
    this.searchForm = this._fb.group({
      prompt: ['', [Validators.required]]
    })
  }
  
  closeModalSearch(){
    this.modal_SearchVisible = false;
    this._modalService.close();
  }

  onSubmit(){
    if(this.searchForm.valid){
      console.log('Busqueda: '+ this.searchForm.get('prompt')?.value);
      this.closeModalSearch();
    }
  }
}

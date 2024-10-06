import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';
import {TaskMock } from '../../../mocks/projects.mock';

@Component({
  selector: 'app-modal-view-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-view-task.component.html',
  styleUrl: './modal-view-task.component.scss'
})
export class ModalViewTaskComponent {

  @Input() task!:TaskMock;

  fullScreen: boolean = false;
  private _modalService = inject(ModalService);
  @Input() modal_viewTaskVisible: boolean = false;
  @Input() name: string = '';
  @Input() description: string = '';


  closeModalViewTask() {
    this._modalService.close();
    this.modal_viewTaskVisible = false;
    this.fullScreen = false;
  }

  activateFullScreen() {
    this.fullScreen = true;
  }

}

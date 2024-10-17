import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../../models/task.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal-view-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-view-task.component.html',
  styleUrl: './modal-view-task.component.scss'
})
export class ModalViewTaskComponent implements OnInit {


  fullScreen: boolean = false;
  private _modalService = inject(ModalService);
  @Input() modal_viewTaskVisible: boolean = false;
  @Input() task: Task | undefined;

  nameTask: string = '';
  descriptionTask: string = '';

  ngOnInit(): void {
    if (this.task) {
      this.nameTask = this.task.name || '';
      this.descriptionTask = this.task.description || '';
    }
  }

  closeModalViewTask() {
    this._modalService.close();
    this.modal_viewTaskVisible = false;
    this.fullScreen = false;
  }

  activateFullScreen() {
    this.fullScreen = true;
  }

  saveTask() {
    //actualizar tarea
    //console.log(`name: ${this.nameTask} des: ${this.descriptionTask}`);

  }

}

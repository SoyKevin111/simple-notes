import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CardTodoComponent } from '../cards/card-todo/card-todo.component';
import { CardDoingComponent } from '../cards/card-doing/card-doing.component';
import { CardDoneComponent } from '../cards/card-done/card-done.component';
import { NgClass } from '@angular/common';
import { Task } from '../../models/task.model';
import { Subject, takeUntil } from 'rxjs';
import { ManageTaskService } from '../../services/manage-task.service';

@Component({
  selector: 'list-card-state',
  standalone: true,
  imports: [CardTodoComponent, CardDoingComponent, CardDoneComponent, NgClass],
  templateUrl: './list-card-state.component.html',
  styleUrl: './list-card-state.component.scss'
})
export class ListCardStateComponent implements OnInit, OnDestroy {

  //destory
  private destroy$ = new Subject<void>();

  //service
  private _manageTaskService = inject(ManageTaskService);

  //Inputs
  @Input() cardState: string = ''; //todo, doing, done

  //Tasks
  todoList: Task[] = []
  doingList: Task[] = []
  doneList: Task[] = []


  ngOnInit(): void {
    this._manageTaskService.getAllTasks()
    .pipe(takeUntil(this.destroy$))
    .subscribe(tasks => {
      this.todoList = tasks.filter(task => task.state === 'Todo')
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

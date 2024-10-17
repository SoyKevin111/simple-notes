import { inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Task } from '../models/task.model';
import { ManageProjectService } from './manage-project.service';
@Injectable({
  providedIn: 'root'
})
export class ManageTaskService implements OnDestroy {

  //destroy
  private $destroy = new Subject<void>();

  //serive project
  private _manageProjectService = inject(ManageProjectService);

  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() {
    //recibe las tareas del proyecto seleccionado
    this._manageProjectService.getProjectSelected()
      .pipe(takeUntil(this.$destroy))
      .subscribe(project => {
        if (project && project.tasks) {
          this.tasksSubject.next(project.tasks)
        } else {
          this.tasksSubject.next([]);
        }
      })
  }

  getAllTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(newTask: Task) {
    const updateTasks = [...this.tasksSubject.getValue(), newTask];
    this.tasksSubject.next(updateTasks);
    this._manageProjectService.updateTasksSelectProject(updateTasks);
  }

  deleteTask(id: string) {
    const updateTasks = this.tasksSubject.getValue().filter(task => task.id !== id);
    this.tasksSubject.next(updateTasks);
    this._manageProjectService.updateTasksSelectProject(updateTasks);
  }

  updateTask(taskId: string, newName: string, newDescription: string) {
    const updateTasks = this.tasksSubject.getValue().map(task =>
      task.id === taskId ? { ...task, name: newName, description: newDescription } : task
    )
    this.tasksSubject.next(updateTasks);
    this._manageProjectService.updateTasksSelectProject(updateTasks);
  }

  getUniqueTaskId(): string {
    const existingIds = this.tasksSubject.getValue().map(task => parseInt(task.id, 10));
    const newId = existingIds.length ? Math.max(...existingIds) + 1 : 1;
    return newId.toString();
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

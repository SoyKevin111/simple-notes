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


  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

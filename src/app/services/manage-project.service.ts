import { Injectable } from '@angular/core';
import { projectsDefault } from '../mocks/projects.mock';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ManageProjectService {

  private projectsSubject = new BehaviorSubject<Project[]>(projectsDefault || []);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor() {
    this.projectsSubject.subscribe(p => {
      console.log(p);

    })
  }

  //solo de lectura
  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  //GET
  getProjectById(id: string): Observable<Project | undefined> {
    return this.projects$.pipe(
      map(p => p.find(p => p.id === id))
    );
  }

  //ADD
  addProject(new_project: Project): void {
    const updatedProjects = [...this.projectsSubject.getValue(), new_project]
    this.projectsSubject.next(updatedProjects);
  }

  //DEL 
  deleteProject(id: string): void {
    const updatedProjects = this.projectsSubject.getValue().filter(p => p.id === id);
    this.projectsSubject.next(updatedProjects);
  }

  //SET
  editProject(id: string) {
    const updatedProjects = this.projectsSubject.getValue().filter(p => p.id === id);
    this.projectsSubject.next(updatedProjects);
  }


}
import { Injectable } from '@angular/core';
import { projectsDefault } from '../mocks/projects.mock';
import { BehaviorSubject, map, max, Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ManageProjectService {

  private projectsSubject = new BehaviorSubject<Project[]>(projectsDefault || []);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  private projectSubjectSelected = new BehaviorSubject<Project | undefined>(undefined);
  $projectSelected: Observable<Project | undefined> = this.projectSubjectSelected.asObservable();


  constructor() {
    const projectLoadSelected = this.projectsSubject.getValue().find(project => project.selected === true);
    if (projectLoadSelected?.selected) {
      this.setProjectSelected(projectLoadSelected);
    }
  }

  //solo de lectura
  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  getProjectById(id: string): Project | undefined {
    return this.projectsSubject.getValue().find(project => project.id === id)
  }

  //ADD
  addProject(new_project: Project): void {
    if (!this.projectExisting(new_project.id)) {
      const updatedProjects = [...this.projectsSubject.getValue(), new_project]
      this.projectsSubject.next(updatedProjects);
    }
    else {
      this.showAlert();
    }
  }

  projectExisting(id: string): boolean {
    return this.projectsSubject.getValue().some(project => project.id === id);
  }

  //DEL 
  deleteProject(id: string): void {
    const updatedProjects = this.projectsSubject.getValue().filter(p => p.id !== id);
    this.deleteProjectSelected();
    this.projectsSubject.next(updatedProjects);
  }

  deleteProjectSelected() {
    //busca y compara si el proyecto esta seleccionado
    //si : vaciar el project selected
    //sino: se deja tal cual
    const isSelected: Project | undefined = this.projectsSubject.getValue().find(proj => proj.selected ? proj : undefined);
    if (isSelected) {
      this.projectSubjectSelected.next(undefined);
    }
  }

  //SET
  updateProjects(projectModified: Project): void {
    const updatedProjects = this.projectsSubject.getValue().map(p =>
      p.id === projectModified.id ? projectModified : p
    )
    this.projectsSubject.next(updatedProjects);
  }

  //Generate ID
  getUniqueProjectId(): string {
    const existingIds = this.projectsSubject.getValue().map(project => parseInt(project.id, 10));
    const newId = existingIds.length ? Math.max(...existingIds) + 1 : 1;
    return newId.toString();
  }

  //Funciones del selected

  getProjectSelected(): Observable<Project | undefined> {
    return this.$projectSelected;
  }


  updateTasksSelectProject(tasks: Task[]) {
    const selectedProject = this.projectSubjectSelected.getValue();
    if (selectedProject) {
      const updateSelectedProject: Project = {
        ...selectedProject,
        tasks: tasks
      };
      console.log(updateSelectedProject);
      this.projectSubjectSelected.next(updateSelectedProject);
      this.updateProjects(updateSelectedProject);
    } else {
      console.log('no hay proyecto seleccionado.')
    }
  }

  //ocurren dos cambios de estado, por eso por consola se ejecuta el console.log de todos los proyectos,
  //por que el 1er cambio es en el el proyecto seleccionado y el 2do es en el nuevo proyecto seleccionado
  setProjectSelected(project: Project | undefined) {
    if (project) {
      this.unselectCurrentProject();
      this.selectNewProject(project);
    }
  }

  private unselectCurrentProject() {
    const currentSelectedProject = this.projectSubjectSelected.getValue();
    if (currentSelectedProject) {
      this.updateProjectSelection(currentSelectedProject.id, false);
    }
  }

  private selectNewProject(project: Project) {
    const newProject = { ...project, selected: true };
    this.updateProjectSelection(newProject.id, true);
    this.projectSubjectSelected.next(newProject);

  }

  private updateProjectSelection(projectId: string, selectedIs: boolean) {
    const updatedProjects = this.projectsSubject.getValue().map(p =>
      p.id === projectId ? { ...p, selected: selectedIs } : p
    )

    this.projectsSubject.next(updatedProjects);
  }

  showAlert() {
    window.alert('El proyecto ya existe (ID)');
  }

}

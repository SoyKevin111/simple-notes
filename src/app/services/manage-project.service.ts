import { Injectable } from '@angular/core';
import { projectsDefault } from '../mocks/projects.mock';
import { BehaviorSubject, map, max, Observable } from 'rxjs';
import { Project } from '../models/project.model';

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



  //GET
  /*   getProjectByIdObs(id: string): Observable<Project | undefined> {
      return this.projects$.pipe(
        map(p => p.find(p => p.id === id))
      );
    } */

  getProjectById(id: string): Project | undefined {
    return this.projectsSubject.getValue().find(project => project.id === id)
  }

  //ADD
  addProject(new_project: Project): void {
    const updatedProjects = [...this.projectsSubject.getValue(), new_project]
    this.projectsSubject.next(updatedProjects);
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
    const projects = this.projectsSubject.getValue();

    if (projects.length === 0) {
      return '1';
    }

    let newId = 1; //inicial
    const existingIds = projects.map(project => parseInt(project.id, 10));//base 10
    const maxId = Math.max(...existingIds);//guardar el mayor valor

    newId = maxId + 1;

    while (existingIds.includes(newId)) {
      newId++
    }


    return newId.toString();
  }

  //Funciones del selected

  getProjectSelected(): Observable<Project | undefined> {
    return this.$projectSelected;
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

}














/*     if (project) {
      const currentSelectedProject = this.projectSubjectSelected.getValue();
      const updatedProjectsBefore = this.projectsSubject.getValue().map(p =>
        p.id === currentSelectedProject?.id ? { ...p, selected: false } : p
      );
      this.projectsSubject.next(updatedProjectsBefore);
 
      //Nuevo proyecto seleccionado
      const newProject = { ...project, selected: true };
      const updatedProjectsAfter = this.projectsSubject.getValue().map(p =>
        p.id === newProject.id ? newProject : p
      );
      this.projectsSubject.next(updatedProjectsAfter);
      this.projectSubjectSelected.next(newProject);
    } */
import { inject, Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { ManageProjectService } from './manage-project.service';

@Injectable({
  providedIn: 'root'
})
export class LoadProjectService {

  projectLoad: Project | undefined;
  private _manaProjectService = inject(ManageProjectService);

  constructor() { }

  loadFileSelected(input: HTMLInputElement) {
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result as string;
        //se lee el json como string para ver si obtiene los datos
        this.loadJsonData(content);
      }
      //se lee como un string
      reader.readAsText(file);
    }
  }
  loadJsonData(jsonString: string) {
    try {
      const jsonData: Project = JSON.parse(jsonString);
      this.projectLoad = jsonData;
      this._manaProjectService.addProject(this.projectLoad);
    } catch (err) {
      console.error('Error en parsing JSON: ' + err)
    }
  }
}

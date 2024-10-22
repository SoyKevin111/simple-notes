import { inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ManageProjectService } from './manage-project.service';
import { Subject, takeUntil } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ManageExportProjectService implements OnDestroy {

  private $destroy = new Subject<void>();

  private _manageProjectService = inject(ManageProjectService);
  projectExport: Project | undefined;

  constructor() {

  }

  exportTxt() {

    this.loadProject();

    let content = `---SIMPLE NOTES---\n\n`;
    content += `User: random123\n\n`
    content += `Project: ${this.projectExport?.title}.\nDescription: ${this.projectExport?.description}.\n\n`

    if (this.projectExport?.tasks !== undefined) {
      //Para Todo
      content += `Tasks to do:\n`;
      this.projectExport.tasks.filter(task => task.state === 'Todo')
        .forEach(task => {
          content += `|  ${task.name}  |\n`;
          content += `---------------------------\n`;
          content += `--Description: ${task.description}\n`;
          content += `---------------------------\n\n`;
        });
      //Para Doing
      content += `Tasks in progress:\n`;
      this.projectExport.tasks.filter(task => task.state === 'Doing')
        .forEach(task => {
          content += `|  ${task.name}  |\n`;
          content += `---------------------------\n`;
          content += `--Description: ${task.description}\n`;
          content += `---------------------------\n\n`;
        });
      //Para Done
      content += `Completed tasks:\n`;
      this.projectExport.tasks.filter(task => task.state === 'Done')
        .forEach(task => {
          content += `|  ${task.name}  |\n`;
          content += `---------------------------\n`;
          content += `--Description: ${task.description}\n`;
          content += `---------------------------\n\n`;
        });

      this.downloadTypeFiles(content, `${this.projectExport.title}`, 'text/plain')

    }


  }

  exportJson() {
    this.loadProject();
    if (this.projectExport) {
      const jsonContent = JSON.stringify(this.projectExport, null, 2);
      this.downloadTypeFiles(jsonContent, `${this.projectExport.title}.json`, 'application/json')
    }
  }

  private downloadTypeFiles(content: string, fileName: string, mimeType: string) {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private loadProject() {
    this._manageProjectService.getProjectSelected()
      .pipe(takeUntil(this.$destroy))
      .subscribe(project => {
        if (project) {
          this.projectExport = project;
        }
      })
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

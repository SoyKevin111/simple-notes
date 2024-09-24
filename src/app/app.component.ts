import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListStateComponent } from './components/list-state/list-state.component';
import { ContainerStateComponent } from './components/container-state/container-state.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContainerStateComponent, NavbarComponent, ProjectMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resource-sass';
}

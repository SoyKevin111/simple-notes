import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListStateComponent } from './components/list-state/list-state.component';
import { ContainerStateComponent } from './components/container-state/container-state.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContainerStateComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resource-sass';
}

import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';

const PRIME_NG_MODULES = [ButtonModule, CardModule];

@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [PRIME_NG_MODULES],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {

}

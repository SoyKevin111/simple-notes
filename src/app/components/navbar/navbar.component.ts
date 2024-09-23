import { Component, OnInit } from '@angular/core';
import { setResponsivePlaceholderByClass } from '../../utils/placeholder-helpers';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
      setResponsivePlaceholderByClass('navbar_search', 'Search Notes...');
  }
  

}

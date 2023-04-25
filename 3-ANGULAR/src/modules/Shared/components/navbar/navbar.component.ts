import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  openSearch() {
    console.log('open search');
  }
}

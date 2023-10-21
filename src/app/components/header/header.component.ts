import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isNavVisible: boolean = false;

  @Output() sidenavToggle = new EventEmitter<void>();

  toggleSideNav() {
    this.sidenavToggle.emit();
  }

  toggleMenu() {
    this.isNavVisible = !this.isNavVisible;
  }
}

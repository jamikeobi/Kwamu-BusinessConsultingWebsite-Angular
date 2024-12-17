import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isServicesOpen: boolean = false; // Toggle state for 'Services' dropdown
  isDesktop: boolean = window.innerWidth > 768; // Check screen size
  currentSubmenu: string = ''; // Tracks active submenu

  toggleServicesDropdown(event: Event): void {
    event.preventDefault();
    if (!this.isDesktop) {
      this.isServicesOpen = !this.isServicesOpen;
    }
  }

  toggleSubmenu(submenu: string): void {
    this.currentSubmenu = this.currentSubmenu === submenu ? '' : submenu;
  }

  onSidebarHover(submenu: string): void {
    this.currentSubmenu = submenu;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isDesktop = window.innerWidth > 768;
    if (this.isDesktop) {
      this.isServicesOpen = false; // Close the dropdown if switching to desktop
    }
  }
}

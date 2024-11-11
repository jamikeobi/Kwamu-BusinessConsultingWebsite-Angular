import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   // Initially the navbar is collapsed (true)
   isNavbarCollapsed: boolean = true;

   // This method will toggle the navbar visibility
   toggleNavbar() {
     this.isNavbarCollapsed = !this.isNavbarCollapsed;
   }

  currentSubmenu: string = 'blog'; // Default submenu to show

  onSidebarHover(submenu: string): void {
    this.currentSubmenu = submenu;
  }
}

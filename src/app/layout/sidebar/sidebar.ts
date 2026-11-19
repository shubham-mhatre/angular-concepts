import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MENU_ITEMS } from '../../data/menu-data';
import { MenuItem } from '../../shared/models/menu-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {

  menuItems: MenuItem[] = MENU_ITEMS;

  expandedMenus = new Set<string>();

  toggleMenu(title: string): void {
    if (this.expandedMenus.has(title)) {
      this.expandedMenus.delete(title);
    } else {
      this.expandedMenus.add(title);
    }
  }

  isExpanded(title: string): boolean {
    return this.expandedMenus.has(title);
  }
}
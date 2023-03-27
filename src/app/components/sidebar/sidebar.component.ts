import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/home', title: 'Compte',  icon:'education_atom', class: '' },
    { path: '/drive2', title: 'Factures',  icon:'location_map-big', class: '' },
    { path: '/portfeuil', title: 'Clients',  icon:'ui-1_bell-53', class: '' },
    { path: '/drive', title: 'Drive',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'exemple',  icon:'design_bullet-list-67', class: '' },
    { path: '/dashboard', title: 'exemple2',  icon:'design_bullet-list-67', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}

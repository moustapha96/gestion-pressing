import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Pos', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Orders', icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'Orders status screen', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Expense', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Customers', icon: 'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Services', icon: 'ni-circle-08 text-pink', class: '' },



  /* { path: '/register', title: 'Repports', icon: 'ni-circle-08 text-pink', class: '' },
   { path: '/register', title: 'Tools', icon: 'ni-circle-08 text-pink', class: '' },
   { path: '/register', title: 'LogOut', icon: 'ni-circle-08 text-pink', class: '' } */

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}

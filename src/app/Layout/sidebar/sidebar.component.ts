import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menus: any = [
    {
      icon: 'iD',
      label: 'Dashboard',
    },
    {
      icon: 'iE',
      label: 'Edit',
    },
    {
      icon: 'iG',
      label: 'Groups',
    },
    {
      icon: 'iL',
      label: 'Logout',
    },
  ];
}

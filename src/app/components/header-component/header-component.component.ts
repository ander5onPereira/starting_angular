import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  menus = [
    {
      id: 0,
      routerLink: '/',
      name: 'Home',
      active: true,
    },
    {
      id: 1,
      routerLink: '/list',
      name: 'Usuarios',
      active: false,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
  ngAtive(id: number): void {
    this.menus.forEach((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}

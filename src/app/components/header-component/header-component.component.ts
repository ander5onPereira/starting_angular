import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Menu } from 'src/app/Menu';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  menus: Menu[] = [
    {
      id: 0,
      routerLink: '/',
      name: 'Home',
      active: true,
    },
    {
      id: 1,
      routerLink: '/list',
      name: 'Usuários',
      active: false,
    },
  ];
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.menus.forEach((item) => {
          if (item.routerLink === this.currentRoute) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      }
    });
  }
}

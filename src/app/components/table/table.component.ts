import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { User } from '../../Users';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  titles = ['ID', 'Nome', 'E-mail', 'CPF', 'Origem', 'Status'];
  count: number = 0;
  users: User[] = [];

  keys: string[] = [];

  ngValue(user: any, value: string): string {
    if (value === 'action') {
      return user[value.toString()] ? 'Ativado' : 'Desativado';
    }
    return user[value.toString()];
  }

  constructor(private listService: ListService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  getUsers(): void {
    this.listService.getAll().subscribe((users) => {
      this.users = users.rows;
      this.count = users.count;
      this.keys = Object.keys(users.rows[0]);
    });
  }
}

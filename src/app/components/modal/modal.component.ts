import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Users';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  mostrar: boolean;
  user: User;

  constructor() {
    this.mostrar = false;
    this.user = {
      id: 0,
      action: false,
      cpf: '',
      email: '',
      name: '',
      origin: '',
    };
  }

  ngOnInit(): void {}
  open(user: User) {
    this.mostrar = !this.mostrar;
    this.user = user;
  }
  close() {
    this.mostrar = !this.mostrar;
  }
}

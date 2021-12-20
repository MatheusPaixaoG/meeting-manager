import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario = new Usuario();
  usuarios!: Usuario[];
  emailDuplicado: boolean = false;
  cpfDuplicado: boolean = false;

  addUser(u: Usuario): void {
    if (this.usuarioService.addUser(u)) {
      this.usuarios.push(u);
      this.usuario = new Usuario();
    } else {
      this.emailDuplicado = true;
      this.cpfDuplicado = true;
    }
  }

  onMove(): void {
    this.emailDuplicado = false;
    this.cpfDuplicado = false;
  }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsers();
  }

}

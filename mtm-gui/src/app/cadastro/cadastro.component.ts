import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  usuario: Usuario = new Usuario();
  usuarios!: Usuario[];
  emailDuplicado: boolean = false;
  cpfDuplicado: boolean = false;

  addUser(u: Usuario): void {
    if (this.usuarioService.addUser(u)) {
      this.usuarios.push(u);
      this.usuario = new Usuario();
      this.router.navigateByUrl('/login');
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

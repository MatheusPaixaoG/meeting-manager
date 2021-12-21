import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  usuarioAtivo!: Usuario;

  deslogar(): void {
    this.usuarioService.deslogar();
    console.log(this.usuarioService.getActiveUser().nome);
  }

  ngOnInit(): void {
    this.usuarioAtivo = this.usuarioService.getActiveUser();
  }

}

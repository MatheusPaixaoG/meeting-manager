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
    this.usuarioService.deslogar().subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (result) => {
        console.log(result);
      }
    });
    //console.log(this.usuarioService.getActiveUser().nome);
  }

  ngOnInit(): void {
    this.usuarioService.getActiveUser().subscribe({
      next: (result) => {
        this.usuarioAtivo = result;
      },
      error: (result) => {
        console.log(result);
      }
    });
  }

}

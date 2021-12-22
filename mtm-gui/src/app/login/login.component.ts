import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { UsuarioLogin } from '../usuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  usuarioAtivo = new Usuario();
  usuarios: Usuario[] = [];
  indexOfEmail!: string;
  usuarioLogin: UsuarioLogin = { email: "", senha: "" };
  usuarioLoginSenhaIncorreta: boolean = false;
  usuarioLoginEmailIncorreto: boolean = false;

  verifyUser(us: UsuarioLogin): void {
    if (this.emailOuSenhaCorretos(false, us.email)) {
      if (this.emailOuSenhaCorretos(true, us.senha)) {
        let usuario = this.usuarios[parseInt(this.indexOfEmail)];
        this.usuarioService.addActiveUser(usuario).subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (result) => {
            console.log(result);
          }
        });
        this.usuarioService.setActiveUser(usuario).subscribe({
          next: (result) => {
            console.log(result);
            this.usuarioService.getActiveUserById(usuario.id).subscribe({
              next: (result) => {
                this.usuarioAtivo = result;
                console.log("Login feito com sucesso" + " " + this.usuarioAtivo.nome);
                this.router.navigateByUrl('/paginaUsuario');
              },
              error: (result) => {
                console.log(result);
              }
            })
          },
          error: (result) => {
            console.log(result);
          }
        });

        this.usuarioLogin = { email: "", senha: "" };
      } else {
        this.usuarioLoginSenhaIncorreta = true;
      }
    } else {
      this.usuarioLoginEmailIncorreto = true;
    }
  }

  emailOuSenhaCorretos(eSenha: boolean, emailSenha: string): boolean | Usuario | undefined {
    var result = undefined;
    if (eSenha) { // Só entra aqui se um email tiver sido encontrado
      result = this.usuarios[parseInt(this.indexOfEmail)].senha == emailSenha;
    } else {
      result = this.usuarios.find(u => u.email == emailSenha);
      this.indexOfEmail = this.usuarios.findIndex(u => u.email == emailSenha).toString();
    }
    return result;
  }

  onMove(): void {
    this.usuarioLoginSenhaIncorreta = false;
    this.usuarioLoginEmailIncorreto = false;
  }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe({
      next: (result) => {
        this.usuarios = result;
        console.log(this.usuarios);
      },
      error: (result) => {
        console.log(result);
      }
    })
  }
}

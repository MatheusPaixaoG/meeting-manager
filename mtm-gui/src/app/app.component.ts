import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Recado } from './Recado';
import { Reuniao } from './reuniao';
import { ReuniaoService } from './reuniao.service';
import { MuralService } from './mural.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { UsuarioLogin } from './usuarioLogin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: Usuario = { nome: "", email: "", senha: "", cpf: "" };
  usuarioLogin: UsuarioLogin = { email: "", senha: "" };
  date!: Date;
  reuniao: Reuniao = { title: "", description: "", mural: [], date: this.date };
  reunioes: Reuniao[] = [];
  mural: Recado[] = [];
  usuarios: Usuario[] = [];
  recado: Recado = { author: "", content: "" };
  reuniaoService = new ReuniaoService();
  muralService = new MuralService();
  usuarioService = new UsuarioService();

  addMeeting(rn: Reuniao): void {
    this.date = new Date();
    if (this.reuniaoService.addMeeting(rn, this.date)) {
      this.reunioes.push(rn);
      this.reuniao = { title: "", description: "", mural: [], date: this.date };
    } else {
      this.reuniao.title = "";
    }
  }

  verifyUser(us: UsuarioLogin): void {
    if (this.emailOuSenhaCorretos(false, us.email)) {
      if (this.emailOuSenhaCorretos(true, us.senha)) {
        console.log("Login feito com sucesso");
        this.usuarioLogin = { email: "", senha: "" };
      } else {
        console.log("Senha incorreta");
        this.usuarioLogin.senha = "";
      }
    } else {
      console.log("Email incorreto");
      this.usuarioLogin.email = "";
    }
  }

  emailOuSenhaCorretos(eSenha: boolean, emailSenha: string): Usuario | undefined {
    var result = undefined;
    if (eSenha) {
      result = this.usuarios.find(u => u.senha == emailSenha);
    } else {
      result = this.usuarios.find(u => u.email == emailSenha);
    }
    return result;
  }

  addUser(u: Usuario): void {
    if (this.usuarioService.addUser(u)) {
      this.usuarios.push(u);
      this.usuario = { nome: "", email: "", senha: "", cpf: "" };
    } else {
      this.usuario.email = "";
      this.usuario.cpf = "";
    }
  }

  addMessage(r: Recado): void {
    if (this.descricaoValida(r.content)) {  // Se nada tiver sido escrito no campo da mensagem, pede para escrever algo
      this.muralService.addMessage(r);
      this.mural.push(r);
      this.recado = { author: "", content: "" };
    } else {
      this.recado.content = "Digite algum conteúdo";
    }
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}

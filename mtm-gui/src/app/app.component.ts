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
  usuario: Usuario = new Usuario();
  usuarioLogin: UsuarioLogin = { email: "", senha: "" };
  usuarioAtivo = new Usuario();
  indexOfEmail!: string;
  date!: Date;
  reuniao: Reuniao = new Reuniao();
  reunioes: Reuniao[] = [];
  mural: Recado[] = [];
  usuarios: Usuario[] = [];
  recado: Recado = { author: "", content: "" };
  constructor(private reuniaoService: ReuniaoService, private muralService: MuralService, private usuarioService: UsuarioService) { }
  emailDuplicado: boolean = false;
  cpfDuplicado: boolean = false;
  tituloReuniaoDuplicado: boolean = false;
  recadoSemConteudo: boolean = false;
  usuarioLoginSenhaIncorreta: boolean = false;
  usuarioLoginEmailIncorreto: boolean = false;

  addMeeting(rn: Reuniao): void {
    this.date = new Date();
    if (this.reuniaoService.addMeeting(rn, this.date, this.usuarioAtivo)) {
      this.reunioes.push(rn);
      this.reuniao = new Reuniao();
    } else {
      this.tituloReuniaoDuplicado = true;
    }
  }

  verifyUser(us: UsuarioLogin): void {
    if (this.emailOuSenhaCorretos(false, us.email)) {
      if (this.emailOuSenhaCorretos(true, us.senha)) {
        this.usuarioAtivo = this.usuarios[parseInt(this.indexOfEmail)];
        console.log("Login feito com sucesso" + this.usuarioAtivo.nome);
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
    this.tituloReuniaoDuplicado = false;
    this.recadoSemConteudo = false;
    this.usuarioLoginSenhaIncorreta = false;
    this.usuarioLoginEmailIncorreto = false;
  }

  addMessage(r: Recado): void {
    if (this.descricaoValida(r.content)) {  // Se nada tiver sido escrito no campo da mensagem, pede para escrever algo
      r.author = this.usuarioAtivo.nome;
      this.muralService.addMessage(r);
      this.mural.push(r);
      this.recado = { author: "", content: "" };
    } else {
      this.recadoSemConteudo = true;
    }
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }

  updateUser(usuario: Usuario): void {
    this.usuarioService.update(usuario);
  }
}

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
  mostraPaginaInicial: boolean = true;
  usuario: Usuario = new Usuario();
  usuarioLogin: UsuarioLogin = { email: "", senha: "" };
  usuarioAtivo = new Usuario();
  indexOfEmail!: string;
  date!: Date;
  reuniao: Reuniao = new Reuniao();
  reunioes: Reuniao[] = [];
  mural: Recado[] = [];
  usuarios: Usuario[] = [];
  recado: Recado = new Recado();
  constructor(private reuniaoService: ReuniaoService, private muralService: MuralService, private usuarioService: UsuarioService) { }
  emailDuplicado: boolean = false;
  cpfDuplicado: boolean = false;
  tituloReuniaoDuplicado: boolean = false;
  recadoSemConteudo: boolean = false;
  usuarioLoginSenhaIncorreta: boolean = false;
  usuarioLoginEmailIncorreto: boolean = false;

  apagarPaginaInicial(): void {
    this.mostraPaginaInicial = false;
  }

  mostrarPaginaInicial(): void {
    this.mostraPaginaInicial = true;
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
    if (eSenha) { // S?? entra aqui se um email tiver sido encontrado
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
      this.muralService.addMessage(r, this.reuniaoService.getActiveMeeting());
      this.mural.push(r);
      this.recado = new Recado();
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

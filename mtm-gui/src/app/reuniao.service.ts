import { Reuniao } from "./reuniao";
import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { UsuarioService } from "./usuario.service";

@Injectable()
export class ReuniaoService {
  reunioes: Reuniao[] = [];
  reunioesAtivas: Reuniao[] = [];
  reuniaoAtiva = new Reuniao();

  addMeeting(reuniao: Reuniao, date: Date, usuarioAtivo: Usuario): Reuniao | null {
    reuniao = reuniao.clone();
    var result = null;
    if (this.tituloNaoUsado(reuniao.title, usuarioAtivo) && this.descricaoValida(reuniao.title)) {
      reuniao.date = date;
      this.reunioes.push(reuniao);
      console.log(this.reunioes);
      usuarioAtivo.reunioes.push(reuniao);
      console.log(usuarioAtivo.nome);
      console.log(usuarioAtivo.reunioes);
      result = reuniao;
    }
    return result;
  }

  tituloNaoUsado(title: string, usuarioAtivo: Usuario): boolean {
    return !usuarioAtivo.reunioes.find(r => r.title == title);
  }

  getMeetings(usuarioAtivo: Usuario): Reuniao[] {
    var result: Reuniao[] = [];
    for (let r of usuarioAtivo.reunioes) {
      result.push(r.clone());
    }
    return result;
  }

  addActiveMeeting(reuniao: Reuniao): void {
    reuniao = reuniao.clone();
    this.reunioesAtivas.push(reuniao);
  }

  setActiveMeeting(reuniao: Reuniao): void {
    var indexOfActiveMeeting = this.reunioes.findIndex(r => r.title == reuniao.title);
    this.reuniaoAtiva = this.reunioes[indexOfActiveMeeting];
    console.log(this.reuniaoAtiva);
  }

  getActiveMeeting(): Reuniao {
    return this.reuniaoAtiva;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}
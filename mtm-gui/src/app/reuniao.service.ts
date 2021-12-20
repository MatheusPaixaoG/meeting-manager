import { Reuniao } from "./reuniao";
import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { UsuarioService } from "./usuario.service";

@Injectable()
export class ReuniaoService {
  reunioes: Reuniao[] = [];
  usuarios: Usuario[] = [];
  usuarioAtivo = new Usuario();
  private usuarioService!: UsuarioService;
  addMeeting(reuniao: Reuniao, date: Date, usuarioAtivo: Usuario): Reuniao | null {
    var result = null;
    if (this.tituloNaoUsado(reuniao.title, usuarioAtivo)) {
      reuniao.date = date;
      usuarioAtivo.reunioes.push(reuniao);
      console.log(usuarioAtivo.nome + " " + usuarioAtivo.reunioes);
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
}
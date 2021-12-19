import { Reuniao } from "./reuniao";
import { Usuario } from "./usuario";

export class ReuniaoService {
  reunioes: Reuniao[] = [];
  addMeeting(reuniao: Reuniao, date: Date, usuarioAtivo: Usuario): Reuniao | null {
    var result = null;
    if (this.tituloNaoUsado(reuniao.title, usuarioAtivo)) {
      reuniao.date = date;
      usuarioAtivo.reunioes.push(reuniao);
      console.log(usuarioAtivo.nome + " " + usuarioAtivo.reunioes);
      // this.reunioes.push(reuniao);
      result = reuniao;
    }
    return result;
  }

  tituloNaoUsado(title: string, usuarioAtivo: Usuario): boolean {
    return !usuarioAtivo.reunioes.find(r => r.title == title);
  }
}
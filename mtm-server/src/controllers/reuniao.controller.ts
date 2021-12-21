import { Reuniao } from "../models/reuniao";
import { Usuario } from "../models/usuario";

export class ReuniaoController {
  reunioes: Reuniao[];
  reunioesAtivas: Reuniao[];
  reuniaoAtiva: Reuniao;
  usuarioAtivo: Usuario = new Usuario();

  constructor() {
    this.reunioes = [];
    this.reunioesAtivas = [];
  }

  addMeeting(reuniao: Reuniao, usuarioAtivo: Usuario): boolean {
    if (this.descricaoValida(reuniao.title)) {
      let date: Date = new Date()
      const newMeeting = new Reuniao(reuniao.title, reuniao.description, reuniao.participantes, reuniao.mural);
      this.reunioes.push(newMeeting);
      this.usuarioAtivo.reunioes.push(newMeeting);
      return true;
    }
    return false;
  }

  // addMeeting(reuniao: Reuniao, date: Date, usuarioAtivo: Usuario): Reuniao | null {
  //   reuniao = reuniao.clone();
  //   var result = null;
  //   if (this.tituloNaoUsado(reuniao.title, usuarioAtivo) && this.descricaoValida(reuniao.title)) {
  //     reuniao.date = date;
  //     this.reunioes.push(reuniao);
  //     console.log(this.reunioes);
  //     usuarioAtivo.reunioes.push(reuniao);
  //     console.log(usuarioAtivo.nome);
  //     console.log(usuarioAtivo.reunioes);
  //     result = reuniao;
  //   }
  //   return result;
  // }

  tituloNaoUsado(title: string, usuarioAtivo: Usuario): boolean {
    return !usuarioAtivo.reunioes.find(r => r.title == title);
  }

  getMeetings(): Reuniao[] {
    return this.usuarioAtivo.reunioes;
  }

  // addActiveMeeting(reuniao: Reuniao): void {
  //   reuniao = reuniao.clone();
  //   this.reunioesAtivas.push(reuniao);
  // }

  setActiveMeeting(reuniao: Reuniao): void {
    var indexOfActiveMeeting = this.reunioes.findIndex(r => r.title == reuniao.title);
    this.reuniaoAtiva = this.reunioes[indexOfActiveMeeting];
  }

  getActiveMeeting(): Reuniao {
    return this.reuniaoAtiva;
  }

  descricaoValida(content: string): boolean {
    var regex = "^\\s*$";
    return !content.match(regex);
  }
}
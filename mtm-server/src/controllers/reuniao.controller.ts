import { Reuniao } from "../models/reuniao";
import { Usuario } from "../models/usuario";

export class ReuniaoController {
  reunioes: Reuniao[];
  reunioesAtivas: Reuniao[];
  reuniaoAtiva: Reuniao;
  count: number;

  constructor() {
    this.reunioes = [];
    this.reunioesAtivas = [];
    this.count = 0;
  }

  addMeeting(reuniao: Reuniao, usuarioAtivo: Usuario): boolean {
    if (this.descricaoValida(reuniao.title)) {
      let date: Date = new Date()
      const newMeeting = new Reuniao(this.count, reuniao.title, reuniao.description, reuniao.participantes, reuniao.mural);
      this.reunioes.push(newMeeting);
      this.count++;
      usuarioAtivo.reunioes.push(newMeeting);
      return true;
    }
    return false;
  }

  deleteMeeting(id: number, usuario: Usuario): boolean {
    let meetingIndex = this.reunioes.findIndex(r => r.id == id);
    if (meetingIndex == -1) {
      return false;
    }

    let usuarioMeetingIndex = usuario.reunioes.findIndex(r => r.id == id);
    usuario.reunioes.splice(usuarioMeetingIndex, 1);
    this.reunioes.splice(meetingIndex, 1);
    return true;
  }

  tituloNaoUsado(title: string, usuarioAtivo: Usuario): boolean {
    return !usuarioAtivo.reunioes.find(r => r.title == title);
  }

  getMeetings(usuarioAtivo: Usuario): Reuniao[] {
    return usuarioAtivo.reunioes;
  }

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
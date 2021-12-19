import { Reuniao } from "./reuniao";

export class ReuniaoService {
  reunioes: Reuniao[] = [];
  addMeeting(reuniao: Reuniao, date: Date): Reuniao | null {
    var result = null;
    if (this.tituloNaoUsado(reuniao.title)) {
      reuniao.date = date;
      this.reunioes.push(reuniao);
      result = reuniao;
    }
    return result;
  }

  tituloNaoUsado(title: string): boolean {
    return !this.reunioes.find(r => r.title == title);
  }
}
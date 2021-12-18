import { Reuniao } from "./reuniao";

export class ReuniaoService {
  reunioes: Reuniao[] = [];
  addMeeting(reuniao: Reuniao, date: Date): Reuniao | null {
    var result = null;
    if (!this.reunioes.find(r => r.title == reuniao.title)) {
      reuniao.date = date;
      this.reunioes.push(reuniao);
      result = reuniao;
    }
    return result;
  }
}
import { Reuniao } from "./reuniao";

export class ReuniaoService {
  reunioes: Reuniao[] = [];
  addMeeting(reuniao: Reuniao, date: Date): void {
    reuniao.date = date;
    this.reunioes.push(reuniao);
  }
}
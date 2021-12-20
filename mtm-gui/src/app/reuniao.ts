import { Recado } from "./Recado";

export class Reuniao {
  title!: string;
  data_inicio!: Date;
  data_fim!: Date;
  date!: Date;
  description!: string;
  participantes!: string[];
  mural: Recado[] = [];
  numbers: number[];

  constructor() {
    this.clean();
    this.numbers = Array(5).fill(0).map((x, i) => i);
  }

  clean(): void {
    this.title = "";
    this.data_inicio = new Date();
    this.data_fim = new Date();
    this.date = new Date();
    this.description = "";
    this.participantes = [];
    this.mural = [];
  }

  clone(): Reuniao {
    var reuniao: Reuniao = new Reuniao();
    reuniao.title = this.title;
    reuniao.data_inicio = this.data_inicio;
    reuniao.data_fim = this.data_fim;
    reuniao.date = this.date;
    reuniao.description = this.description;
    reuniao.participantes = this.cloneParticipantes();
    reuniao.mural = this.cloneMural();
    return reuniao;
  }

  cloneParticipantes(): string[] {
    var participantes: string[] = [];
    for (var i = 0; i < this.participantes.length; i++) {
      participantes.push(this.participantes[i]);
    }
    return participantes;
  }

  cloneMural(): Recado[] {
    var mural: Recado[] = [];
    for (var i = 0; i < this.mural.length; i++) {
      mural.push(this.mural[i]);
    }
    return mural;
  }
}
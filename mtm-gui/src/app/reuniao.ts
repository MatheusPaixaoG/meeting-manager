import { Recado } from "./Recado";

export class Reuniao {
  title!: string;
  date!: Date;
  description!: string;
  mural: Recado[] = [];

  constructor() {
    this.clean();
  }

  clean(): void {
    this.title = "";
    this.date = new Date();
    this.description = "";
    this.mural = [];
  }

  clone(): Reuniao {
    var reuniao: Reuniao = new Reuniao();
    reuniao.title = this.title;
    reuniao.date = this.date;
    reuniao.description = this.description;
    reuniao.mural = this.cloneMural();
    return reuniao;
  }

  cloneMural(): Recado[] {
    var mural: Recado[] = [];
    for (var i = 0; i < this.mural.length; i++) {
      mural.push(this.mural[i]);
    }
    return mural;
  }
}